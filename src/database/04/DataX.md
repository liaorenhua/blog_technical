# DataX

## 简介 
DataX 是阿里巴巴开源的一个异构数据源离线同步工具，致力于实现包括关系型数据库(MySQL、Oracle等)、HDFS、Hive、ODPS、HBase、FTP等各种异构数据源之间稳定高效的数据同步功能。   
官网社区介绍：  https://developer.aliyun.com/article/1295493    

## 部署
下载安装包(建议下载最新包)，这里参考了案例社区编写     
源码和包地址： https://github.com/alibaba/DataX    通过Download DataX下载地址->   https://datax-opensource.oss-cn-hangzhou.aliyuncs.com/202308/datax.tar.gz  更新版本->  https://datax-opensource.oss-cn-hangzhou.aliyuncs.com/202309/datax.tar.gz     

准备好文件（后续会下载）：  
datax.tar.gz（202309 版本，阿里云官方源）
db2jcc4-10.5.jar（DB2 官方 JDBC 驱动，必装）

步骤 1：下载 + 解压 
```bash
# 进入/home/liao/soft目录（/opt 是Linux通用软件目录，请根据实际情况调整安装目录）
cd /home/liao/soft

# 下载202309版本DataX（阿里云官方源，稳定）
wget https://datax-opensource.oss-cn-hangzhou.aliyuncs.com/202309/datax.tar.gz  # 建议先下载 E:\TechnicalProject\DataX\DataX\datax.tar.gz

# 解压（-C 指定解压到/home/liao/soft，避免散文件）
tar -zxvf datax.tar.gz -C /home/liao/soft/

# 确认解压结果（应有/home/liao/soft/datax目录）
ls /home/liao/soft/datax
```

步骤 2：检查 Python 环境（CentOS 7.9 一般有）
```bash 
# 检查Python版本（CentOS 7.9默认Python2.7.5）
python -V

# 若显示Python 2.7.x → 直接下一步；若意外缺失，执行：
# yum install -y python2
```

步骤 3：执行自检脚本（验证 DataX 基础可用）   
```bash
# 执行内置的stream2stream任务（无数据源依赖，纯自检）
python /home/liao/soft/datax/bin/datax.py /home/liao/soft/datax/job/job.json
```
✅ 成功标志：日志最后显示任务退出状态码：0、总读取记录数：10，无报错。

步骤 4：配置 RDBMSReader 支持 DB2（官方标准方式）   
RDBMSReader 是 DataX 通用关系型数据库读取插件，内置支持 DB2，仅需补充 DB2 驱动并注册即可：    
```bash
# 1. 确保 RDBMSReader 目录存在（DataX 官方包默认已包含）
mkdir -p /home/liao/soft/datax/plugin/reader/rdbmsreader/libs

# 2. 下载 DB2 JDBC 驱动到 RDBMSReader 的 libs 目录（核心依赖）
cd /home/liao/soft/datax/plugin/reader/rdbmsreader/libs/  # 上传: db2jcc4-10.5.jar 到此

mkdir -p /home/liao/soft/datax/plugin/writer/mysqlwriter/libs
cd /home/liao/soft/datax/plugin/writer/mysqlwriter/libs/  # 上传: mysql-connector-java-8.0.28.jar 到此

# 3. 注册 DB2 驱动到 RDBMSReader 配置（编辑 plugin.json）
cd /home/liao/soft/datax/plugin/reader/rdbmsreader/
vi plugin.json               
```

将 plugin.json 内容修改为以下（核心是添加 DB2 驱动类）：
```json
{
    "name": "rdbmsreader",
    "class": "com.alibaba.datax.plugin.reader.rdbmsreader.RdbmsReader",
    "description": {
        "usage": "通用关系型数据库读取插件，支持DB2/MySQL/Oracle/SQLServer等",
        "developer": "Alibaba"
    },
    "drivers": [
        "com.ibm.db2.jcc.DB2Driver"
    ]
}
```

验证 RDBMSReader 识别 DB2（能生成配置模板即成功）     
```bash
python /home/liao/soft/datax/bin/datax.py -r rdbmsreader -w streamwriter
```
✅ 成功标志：控制台输出 RDBMSReader 的 JSON 配置模板，包含 jdbcUrl、username 等字段。


步骤 5：编写 DB2→MySQL 同步任务（官方标准配置-单配置版本-多配置详细见常见问题）   
```bash
# 新建任务文件（实际本地详细见: E:\TechnicalProject\DataX\DataX\config）
vi /home/liao/soft/datax/job/db2_to_mysql.json
```

```json
{
  "job": {
    "content": [
      {
        "reader": {
          "name": "rdbmsreader",
          "parameter": {
            "username": "db2inst1",
            "password": "xxxxxx",
            "column": ["id", "PROC_DATE", "CTR_NO","INV_CODE","INV_NO","BU_CODE","CREATE_TIME","CREATE_BY"],
            "where": "proc_date > '20251225'",
            "connection": [
              {
                "jdbcUrl": ["jdbc:db2://xxx.xxx.xxx.xxx:60000/RWS_TEST"],
                "table": ["EWSAPP.IN_INVOICE_HIS"]
              }
            ]
          }
        },
        "writer": {
          "name": "mysqlwriter",
          "parameter": {
            "username": "root",
            "password": "xxxxxx",
            "column": ["id", "PROC_DATE", "CTR_NO","INV_CODE","INV_NO","BU_CODE","CREATE_TIME","CREATE_BY"],
            "connection": [
              {
                "jdbcUrl": "jdbc:mysql://xxx.xxx.xxx.xxx:3316/ewsapp?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true",
                "table": ["IN_INVOICE_HIS"]
              }
            ],
            "writeMode": "insert",
            "batchSize": 1000
          }
        }
      }
    ],
    "setting": {
      "speed": {
        "channel": 2
      }
    }
  }
}
```

步骤 6：执行同步任务  
```bash
# 执行DB2→MySQL同步
python /home/liao/soft/datax/bin/datax.py /home/liao/soft/datax/job/db2_to_mysql.json  > sync.log 2>&1
```
✅ 成功标志：日志显示总读取记录数=N、总写入记录数=N、任务退出状态码：0。  


## 常见问题   
1. 权限/目录问题：若执行时报Permission denied，给 DataX 目录赋权   
```bash
chmod -R 755 /home/liao/soft/datax/   

# 可选：将目录归属赋给liao用户（避免权限冲突）
chown -R liao:liao /home/liao/soft/datax

# 可选：先创建安装目录（若不存在）
mkdir -p /home/liao/soft
# 再进入目录
cd /home/liao/soft
```

2. 网络问题：CentOS 7.9 默认有防火墙，需放行 DB2（50000）/MySQL（3306）端口，或临时关闭防火墙：
```bash
# 临时关闭firewalld（测试用）
systemctl stop firewalld
systemctl disable firewalld 
```

3.  依赖缺失：若执行时报ImportError: No module named xxx，安装缺失依赖：
```bash
yum install -y python-pip
pip install simplejson  # DataX常用依赖
```

4. 单个配置文件配置多表失效问题   
编写: batch_sync_all.sh
新建文件夹:   mkdir -p /home/liao/soft/datax/job/single_tables
```bash
#!/bin/bash
# 定义单表配置目录和日志目录
JOB_DIR="/home/liao/soft/datax/job/single_tables"
LOG_DIR="/home/liao/soft/datax/logs/$(date +%Y%m%d)"

# 在脚本开头添加
if [ ! -d ${JOB_DIR} ]; then
    echo "错误：单表配置目录 ${JOB_DIR} 不存在！"
    exit 1
fi

# 创建日志目录（不存在则创建）
mkdir -p ${LOG_DIR}

# 遍历所有单表JSON配置，逐个执行同步
for json_file in ${JOB_DIR}/*.json
do
    # 获取文件名（用于日志命名）
    file_name=$(basename ${json_file})
    log_file="${LOG_DIR}/${file_name%.json}_sync.log"

    # 打印执行信息
    echo -e "\n====================================="
    echo "开始同步表：${file_name}"
    echo "日志保存路径：${log_file}"
    echo "====================================="

    # 执行同步任务，并重定向日志
    python /home/liao/soft/datax/bin/datax.py ${json_file} > ${log_file} 2>&1

    # 判断任务执行结果
    if [ $? -eq 0 ]; then
        echo "${file_name} 同步成功！可查看日志确认详情。"
    else
        echo "${file_name} 同步失败！请查看日志：${log_file}"
    fi

    # 每张表同步后休眠1秒，避免数据库连接压力过大
    sleep 1
done

echo -e "\n所有表同步任务执行完毕！总日志目录：${LOG_DIR}"
```

```bash
chmod +x /home/liao/soft/datax/job/batch_sync_all.sh
sh /home/liao/soft/datax/job/batch_sync_all.sh
```





