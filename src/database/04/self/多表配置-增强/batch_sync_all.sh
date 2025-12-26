#!/bin/bash
# 关闭全局set -e，改为关键步骤手动判断退出码，提升容错性
# set -e

# ====================== 0. 统一定义 DataX 根目录（公共目录，仅需改这里） ======================
DATAX_ROOT="/home/liao/soft/datax"
# 并发数配置
CONCURRENT_NUM=3

# ====================== 1. 定义动态参数（统一管理，只需改这里） ======================
# DB2 数据库配置
DB2_USER="db2inst1"
DB2_PWD="liao"
DB2_JDBC_URL="jdbc:db2://192.168.42.12:60000/RWS_TEST"

# MySQL 数据库配置
MYSQL_USER="root"
MYSQL_PWD="liao"
MYSQL_JDBC_URL="jdbc:mysql://192.168.42.12:3316/ewsapp?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&connectTimeout=30000&socketTimeout=60000&useServerPrepStmts=false&rewriteBatchedStatements=true&allowMultiQueries=true&sessionVariables=sql_mode='STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO'"

# 可选：指定DataX兼容的Python2路径（关键！根据实际环境调整）
PYTHON_CMD="/usr/bin/python"

# ====================== 2. 定义子目录（基于根目录拼接，无需单独改） ======================
TPL_DIR="${DATAX_ROOT}/job/single_tables_tpl"
TMP_DIR="${DATAX_ROOT}/job/single_tables_json"
LOG_DIR="${DATAX_ROOT}/logs/$(date +%Y%m%d)"
DATAX_BIN="${DATAX_ROOT}/bin/datax.py"

# ====================== 3. 前置检查（增强版） ======================
# 检查DataX根目录
if [ ! -d "${DATAX_ROOT}" ]; then
    echo "[ERROR] DataX根目录 ${DATAX_ROOT} 不存在！"
    exit 1
fi

# 检查模板目录
if [ ! -d "${TPL_DIR}" ]; then
    echo "[ERROR] 模板目录 ${TPL_DIR} 不存在！"
    exit 1
fi

# 检查DataX执行脚本
if [ ! -f "${DATAX_BIN}" ]; then
    echo "[ERROR] DataX执行脚本 ${DATAX_BIN} 不存在！"
    exit 1
fi

# ====================== 新增：严格检查Python版本为2.7（DataX强制要求） ======================
PYTHON_VERSION=$(${PYTHON_CMD} -V 2>&1 | awk '{print $2}' | cut -d. -f1-2)
if [ "${PYTHON_VERSION}" != "2.7" ]; then
    echo "[ERROR] DataX仅支持Python2.7！当前Python版本：${PYTHON_VERSION}，请修改PYTHON_CMD为Python2.7路径"
    exit 1
fi

# 检查模板目录是否有.tpl文件
tpl_files=("${TPL_DIR}"/*.tpl)
# 修复空匹配问题：当无.tpl文件时，避免匹配到字面量
if [ ! -f "${tpl_files[0]}" ]; then
    echo "[ERROR] 模板目录 ${TPL_DIR} 下无.tpl模板文件！"
    exit 1
fi

# 创建临时/日志目录（不存在则创建）
mkdir -p "${TMP_DIR}"
mkdir -p "${LOG_DIR}"
# ====================== 新增：设置目录权限，避免读写失败 ======================
chmod 755 "${TMP_DIR}" "${LOG_DIR}"
# 新增：批量赋予模板文件读权限，解决Permission denied问题
chmod 644 "${TPL_DIR}"/*.tpl 2>/dev/null
echo "[INFO] 前置检查完成，临时目录：${TMP_DIR}，日志目录：${LOG_DIR}"
echo "[INFO] 并发数设置为：${CONCURRENT_NUM}"

# ====================== 4. 批量处理模板+执行同步（支持并发） ======================
# 初始化失败标记
fail_tables=()
success_tables=()

# 创建临时文件来跟踪进程ID
pid_file=$(mktemp)

# 函数：处理单个模板文件
process_template() {
    local tpl_file=$1
    local tpl_name=$(basename "${tpl_file}")
    local json_name="${tpl_name%.tpl}.json"
    local tmp_json="${TMP_DIR}/${json_name}"
    local log_file="${LOG_DIR}/${json_name%.json}_sync.log"

    # ====================== 新增：记录同步开始时间 ======================
    local start_time=$(date +"%Y-%m-%d %H:%M:%S")
    # 打印执行信息
    echo -e "\n====================================="
    echo "[INFO] 开始处理表：${json_name}（开始时间：${start_time}）"
    echo "[INFO] 临时JSON：${tmp_json}"
    echo "[INFO] 日志文件：${log_file}"
    echo "====================================="

    # ====================== 核心：替换占位符（兼容特殊字符） ======================
    # 对密码做sed转义（处理&、/、|等特殊字符）
    local DB2_PWD_ESC=$(echo "${DB2_PWD}" | sed -e 's/[\/&|]/\\&/g')
    local MYSQL_PWD_ESC=$(echo "${MYSQL_PWD}" | sed -e 's/[\/&|]/\\&/g')
    local DB2_JDBC_URL_ESC=$(echo "${DB2_JDBC_URL}" | sed -e 's/[\/&|]/\\&/g')
    local MYSQL_JDBC_URL_ESC=$(echo "${MYSQL_JDBC_URL}" | sed -e 's/[\/&|]/\\&/g')

    # 替换占位符（用|作为分隔符，避免URL中/的转义）
    # 修复：清理DB2表名中EWSAPP后的多余空格（兼容多个空格）
    sed -e "s|{{DB2_USER}}|${DB2_USER}|g" \
        -e "s|{{DB2_PWD}}|${DB2_PWD_ESC}|g" \
        -e "s|{{DB2_JDBC_URL}}|${DB2_JDBC_URL_ESC}|g" \
        -e "s|{{MYSQL_USER}}|${MYSQL_USER}|g" \
        -e "s|{{MYSQL_PWD}}|${MYSQL_PWD_ESC}|g" \
        -e "s|{{MYSQL_JDBC_URL}}|${MYSQL_JDBC_URL_ESC}|g" \
        -e "s|EWSAPP[[:space:]]\+\.|EWSAPP.|g" \
        "${tpl_file}" > "${tmp_json}"

    # 新增：检查sed执行结果，避免生成空文件
    local sed_exit_code=$?
    if [ ${sed_exit_code} -ne 0 ]; then
        echo "[ERROR] ${json_name} 模板替换失败（sed执行错误）！跳过"
        echo "failed" > "${tmp_json}.status"
        return 1
    fi

    # 检查临时文件是否生成 + 非空检查
    if [ ! -f "${tmp_json}" ] || [ ! -s "${tmp_json}" ]; then
        echo "[ERROR] ${json_name} 临时文件生成失败或为空！跳过"
        # 输出调试信息
        echo "[DEBUG] 检查模板文件内容："
        head -n 5 "${tpl_file}"
        echo "[DEBUG] 检查生成的临时文件大小：$(stat -c%s "${tmp_json}" 2>/dev/null || echo 'File does not exist')"
        echo "failed" > "${tmp_json}.status"
        return 1
    fi

    # ====================== 新增：设置临时JSON文件权限，避免DataX读取失败 ======================
    chmod 644 "${tmp_json}"

    # ====================== 执行DataX同步（保留实时输出+记录日志） ======================
    echo "[INFO] 开始同步 ${json_name}...（实时输出见终端，详细日志见${log_file}）"
    # 修复：兼容bash的PIPESTATUS，确保正确捕获DataX退出码
    ${PYTHON_CMD} "${DATAX_BIN}" "${tmp_json}" 2>&1 | tee "${log_file}"
    local sync_exit_code=${PIPESTATUS[0]}

    # ====================== 新增：记录同步结束时间 ======================
    local end_time=$(date +"%Y-%m-%d %H:%M:%S")
    # 判断同步结果
    if [ ${sync_exit_code} -eq 0 ]; then
        echo "[SUCCESS] ${json_name} 同步完成！（结束时间：${end_time}）"
        echo "success" > "${tmp_json}.status"
        # 可选：同步成功后删除临时文件（如需保留排查，注释此行）
        rm -f "${tmp_json}"
        rm -f "${tmp_json}.status"
        return 0
    else
        echo "[ERROR] ${json_name} 同步失败！（结束时间：${end_time}）请查看日志：${log_file}"
        echo "failed" > "${tmp_json}.status"
        return 1
    fi
}

# ====================== 并发执行逻辑 ======================
for tpl_file in "${TPL_DIR}"/*.tpl; do
    # 跳过非文件（避免空遍历匹配到*.tpl字面量）
    [ -f "${tpl_file}" ] || continue

    # 等待，确保并发数不超过限制
    while [ $(jobs -r | wc -l) -ge ${CONCURRENT_NUM} ]; do
        sleep 1
    done

    # 在后台执行处理函数
    process_template "${tpl_file}" &
done

# 等待所有后台任务完成
wait

# ====================== 5. 执行结果汇总 ======================
echo -e "\n====================================="
echo "[SUMMARY] 所有任务执行完毕！"

# 检查状态文件来确定哪些表成功或失败
for tpl_file in "${TPL_DIR}"/*.tpl; do
    [ -f "${tpl_file}" ] || continue
    tpl_name=$(basename "${tpl_file}")
    json_name="${tpl_name%.tpl}.json"
    tmp_json="${TMP_DIR}/${json_name}"

    if [ -f "${tmp_json}.status" ]; then
        status=$(cat "${tmp_json}.status")
        if [ "$status" = "failed" ]; then
            fail_tables+=("${json_name}")
        else
            success_tables+=("${json_name}")
        fi
        rm -f "${tmp_json}.status"
    else
        success_tables+=("${json_name}")
    fi
done

if [ ${#fail_tables[@]} -eq 0 ]; then
    echo "[SUCCESS] 所有表同步成功！成功数量：${#success_tables[@]}"
    exit 0
else
    echo "[ERROR] 以下表同步失败：${fail_tables[*]}"
    echo "[INFO] 成功同步表数量：${#success_tables[@]}"
    exit 1
fi

# 清理临时文件
rm -f "${pid_file}"
