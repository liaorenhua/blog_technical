#!/bin/bash
# 关闭全局set -e，改为关键步骤手动判断退出码，提升容错性
# set -e

# ====================== 0. 统一定义 DataX 根目录（公共目录，仅需改这里） ======================
DATAX_ROOT="/home/liao/soft/datax"
# 并发数配置
CONCURRENT_NUM=3

# ====================== 1. 定义动态参数（统一管理，只需改这里） ======================
# DB2 数据库配置（来源表，带Schema）
DB2_USER="db2inst1"
DB2_PWD="xxx"
DB2_JDBC_URL="jdbc:db2://xxx.xxx.xxx.xxx:60000/RWS_TEST"

# MySQL 数据库配置（目标表，无Schema，库名已在JDBC URL中指定为ewsapp）
MYSQL_USER="root"
MYSQL_PWD="xxx"
MYSQL_JDBC_URL="jdbc:mysql://xxx.xxx.xxx.xxx:3316/ewsapp?useUnicode=true&characterEncoding=utf8&useSSL=false&serverTimezone=Asia/Shanghai&allowPublicKeyRetrieval=true&connectTimeout=30000&socketTimeout=60000&useServerPrepStmts=false&rewriteBatchedStatements=true&allowMultiQueries=true&sessionVariables=sql_mode='STRICT_TRANS_TABLES,NO_ZERO_DATE,NO_ZERO_IN_DATE,ERROR_FOR_DIVISION_BY_ZERO'"

# 可选：指定DataX兼容的Python2路径（关键！根据实际环境调整）
PYTHON_CMD="/usr/bin/python"

# ====================== 2. 定义子目录（基于根目录拼接，无需单独改） ======================
TPL_DIR="${DATAX_ROOT}/job/single_tables_tpl"
TMP_DIR="${DATAX_ROOT}/job/single_tables_json"
LOG_DIR="${DATAX_ROOT}/logs/$(date +%Y%m%d)"
DATAX_BIN="${DATAX_ROOT}/bin/datax.py"

# ====================== 3. 前置检查（增强版 + 修复权限） ======================
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

# 检查Python2版本
PYTHON_VERSION=$(${PYTHON_CMD} -V 2>&1 | awk '{print $2}' | cut -d. -f1-2)
if [ "${PYTHON_VERSION}" != "2.7" ]; then
    echo "[ERROR] DataX仅支持Python2.7！当前Python版本：${PYTHON_VERSION}，请修改PYTHON_CMD为Python2.7路径"
    exit 1
fi

# 检查模板文件是否存在 + 强制赋权（修复Permission denied）
tpl_files=("${TPL_DIR}"/*.tpl)
if [ ! -f "${tpl_files[0]}" ]; then
    echo "[ERROR] 模板目录 ${TPL_DIR} 下无.tpl模板文件！"
    exit 1
fi
# 强制赋予模板文件读权限（root用户也能读）
chmod -R 744 "${TPL_DIR}"
echo "[INFO] 已强制赋予模板目录 ${TPL_DIR} 读权限！"

# 创建临时/日志目录（不存在则创建）
mkdir -p "${TMP_DIR}" "${LOG_DIR}"
chmod 755 "${TMP_DIR}" "${LOG_DIR}"
echo "[INFO] 前置检查完成，临时目录：${TMP_DIR}，日志目录：${LOG_DIR}"
echo "[INFO] 并发数设置为：${CONCURRENT_NUM}"

# ====================== 4. 核心函数：处理单表同步（修复sed和解析逻辑） ======================
process_template() {
    local tpl_file=$1
    # 安全检查：确保文件存在且可读
    if [ ! -f "${tpl_file}" ] || [ ! -r "${tpl_file}" ]; then
        echo "[ERROR] 模板文件不存在/不可读：${tpl_file}"
        return 1
    fi

    local tpl_name=$(basename "${tpl_file}")
    local json_name="${tpl_name%.tpl}.json"
    local table_base_name="${json_name%.json}"

    # 解析DB2 Schema和表名（模板名：DB2_Schema.表名.tpl）
    IFS='.' read -ra name_parts <<< "${tpl_name}"
    if [ ${#name_parts[@]} -lt 3 ]; then
        echo "[ERROR] 模板名格式错误！${tpl_name} 需为 DB2_Schema.表名.tpl（如ewsapp.batch_date.tpl）"
        return 1
    fi
    local db2_schema="${name_parts[0]}"
    local db2_table_name="${name_parts[1]}"
    local full_display_name="${db2_schema}.${db2_table_name}"

    # 恢复原有文件路径
    local tmp_json="${TMP_DIR}/${json_name}"
    local log_file="${LOG_DIR}/${table_base_name}_sync.log"

    # 打印同步信息
    local start_time=$(date +"%Y-%m-%d %H:%M:%S")
    echo -e "\n====================================="
    echo "[INFO] 开始处理DB2来源表：${full_display_name}（JSON文件：${json_name}，开始时间：${start_time}）"
    echo "[INFO] 临时JSON：${tmp_json}"
    echo "[INFO] 日志文件：${log_file}"
    echo "====================================="

    # 修复sed命令：转义变量 + 确保输入文件正确
    local DB2_PWD_ESC=$(echo "${DB2_PWD}" | sed -e 's/[\/&|]/\\&/g')
    local MYSQL_PWD_ESC=$(echo "${MYSQL_PWD}" | sed -e 's/[\/&|]/\\&/g')
    local DB2_JDBC_URL_ESC=$(echo "${DB2_JDBC_URL}" | sed -e 's/[\/&|]/\\&/g')
    local MYSQL_JDBC_URL_ESC=$(echo "${MYSQL_JDBC_URL}" | sed -e 's/[\/&|]/\\&/g')

    # 执行sed替换（修复空路径错误）
    sed -e "s|{{DB2_USER}}|${DB2_USER}|g" \
        -e "s|{{DB2_PWD}}|${DB2_PWD_ESC}|g" \
        -e "s|{{DB2_JDBC_URL}}|${DB2_JDBC_URL_ESC}|g" \
        -e "s|{{MYSQL_USER}}|${MYSQL_USER}|g" \
        -e "s|{{MYSQL_PWD}}|${MYSQL_PWD_ESC}|g" \
        -e "s|{{MYSQL_JDBC_URL}}|${MYSQL_JDBC_URL_ESC}|g" \
        -e "s|EWSAPP[[:space:]]\+\.|${db2_schema}.|g" \
        "${tpl_file}" > "${tmp_json}"

    # 检查sed执行结果
    local sed_exit_code=$?
    if [ ${sed_exit_code} -ne 0 ]; then
        echo "[ERROR] DB2来源表 ${full_display_name} 模板替换失败（sed执行错误）！跳过"
        echo "failed|${full_display_name}|0|0" > "${tmp_json}.status"
        return 1
    fi

    # 检查临时文件
    if [ ! -f "${tmp_json}" ] || [ ! -s "${tmp_json}" ]; then
        echo "[ERROR] DB2来源表 ${full_display_name} 临时文件生成失败或为空！"
        echo "[DEBUG] 模板文件内容（前5行）："
        head -n 5 "${tpl_file}"
        echo "failed|${full_display_name}|0|0" > "${tmp_json}.status"
        return 1
    fi
    chmod 644 "${tmp_json}"

    # 执行DataX同步
    echo "[INFO] 开始同步DB2来源表：${full_display_name}...（实时日志见${log_file}）"
    ${PYTHON_CMD} "${DATAX_BIN}" "${tmp_json}" 2>&1 | tee "${log_file}"
    local sync_exit_code=${PIPESTATUS[0]}

    # 解析同步记录数
    local total_records=0
    local error_records=0
    sleep 1

    if [ -f "${log_file}" ]; then
        echo "[DEBUG] ===== DB2来源表 ${full_display_name} 日志解析开始 ====="
        # 提取Total记录数
        total_line=$(grep -E "Total [0-9]+ records" "${log_file}" | tail -1)
        if [ -n "$total_line" ] && [[ "$total_line" =~ Total[[:space:]]+([0-9]+)[[:space:]]+records ]]; then
            total_records=${BASH_REMATCH[1]}
            echo "[DEBUG] ${full_display_name} - Total记录数：${total_records}"
        fi
        # 提取Error记录数
        error_line=$(grep -E "Error [0-9]+ records" "${log_file}" | tail -1)
        if [ -n "$error_line" ] && [[ "$error_line" =~ Error[[:space:]]+([0-9]+)[[:space:]]+records ]]; then
            error_records=${BASH_REMATCH[1]}
            echo "[DEBUG] ${full_display_name} - Error记录数：${error_records}"
        fi
        # 兜底提取
        if [ $total_records -eq 0 ]; then
            read_total_line=$(grep -E "读出记录总数\s+:\s+[0-9]+" "${log_file}")
            if [ -n "$read_total_line" ]; then
                read_total=$(echo "$read_total_line" | awk -F ':' '{gsub(/ /,"",$2);print $2}')
                if [[ "$read_total" =~ ^[0-9]+$ ]]; then
                    total_records=$read_total
                    echo "[DEBUG] ${full_display_name} - 兜底提取读出记录数：${total_records}"
                fi
            fi
        fi
        echo "[DEBUG] ${full_display_name} - 最终确认：总记录数=${total_records}，错误记录数=${error_records}"
        echo "[DEBUG] ===== DB2来源表 ${full_display_name} 日志解析结束 ====="
    fi

    # 写入状态
    if [ ${sync_exit_code} -eq 0 ]; then
        echo "[SUCCESS] DB2来源表 ${full_display_name} 同步完成！（结束时间：$(date +"%Y-%m-%d %H:%M:%S")）"
        echo "success|${full_display_name}|${total_records}|${error_records}" > "${tmp_json}.status"
        rm -f "${tmp_json}"
        return 0
    else
        echo "[ERROR] DB2来源表 ${full_display_name} 同步失败！（结束时间：$(date +"%Y-%m-%d %H:%M:%S")）日志：${log_file}"
        echo "failed|${full_display_name}|${total_records}|${error_records}" > "${tmp_json}.status"
        return 1
    fi
}

# ====================== 5. 并发执行同步 ======================
# 初始化统计变量
fail_tables=()
success_tables=()
table_stats=()
pid_file=$(mktemp)

# 遍历模板文件执行同步
for tpl_file in "${TPL_DIR}"/*.tpl; do
    # 跳过空匹配（无.tpl文件时）
    [ -f "${tpl_file}" ] || continue

    # 控制并发数
    while [ $(jobs -r | wc -l) -ge ${CONCURRENT_NUM} ]; do
        sleep 1
    done

    # 后台执行
    process_template "${tpl_file}" &
done

# 等待所有后台任务完成
wait

# ====================== 6. 结果汇总（修复local关键字错误） ======================
echo -e "\n====================================="
echo "[SUMMARY] 所有任务执行完毕！"

# 汇总循环（去掉local，修复语法错误）
for tpl_file in "${TPL_DIR}"/*.tpl; do
    [ -f "${tpl_file}" ] || continue

    tpl_name=$(basename "${tpl_file}")
    json_name="${tpl_name%.tpl}.json"
    tmp_json="${TMP_DIR}/${json_name}"

    # 解析模板名（修复格式错误）
    IFS='.' read -ra name_parts <<< "${tpl_name}"
    if [ ${#name_parts[@]} -lt 3 ]; then
        echo "[WARNING] 模板名格式错误，跳过统计：${tpl_name}（需为DB2_Schema.表名.tpl）"
        continue
    fi
    full_display_name="${name_parts[0]}.${name_parts[1]}"

    # 读取状态文件
    if [ -f "${tmp_json}.status" ]; then
        echo "[DEBUG] 读取DB2来源表 ${full_display_name} 状态文件："
        cat "${tmp_json}.status"

        IFS='|' read -r status table total error <<< "$(cat "${tmp_json}.status")"
        if [ "$status" = "failed" ]; then
            fail_tables+=("${full_display_name}")
        else
            success_tables+=("${full_display_name}")
        fi
        table_stats+=("${full_display_name}|${total}|${error}|${status}")
        rm -f "${tmp_json}.status"
    else
        echo "[WARNING] DB2来源表 ${full_display_name} 无状态文件，记为失败"
        fail_tables+=("${full_display_name}")
        table_stats+=("${full_display_name}|0|0|failed")
    fi
done

# ====================== 7. 生成最终报表 ======================
echo -e "\n====================================="
echo "[REPORT] 数据同步报表（DB2 → MySQL）"
echo "====================================="
echo "同步时间: $(date)"
echo "总表数量: $((${#success_tables[@]} + ${#fail_tables[@]}))"
echo "成功数量: ${#success_tables[@]}"
echo "失败数量: ${#fail_tables[@]}"
echo "====================================="
echo "详细统计（DB2来源表：Schema.表名）："
printf "%-40s %-15s %-15s %-10s\n" "DB2来源表(Schema.表名)" "总记录数" "错误记录数" "状态"
echo "----------------------------------------"
for stat in "${table_stats[@]}"; do
    IFS='|' read -r tname total error status <<< "$stat"
    printf "%-40s %-15s %-15s %-10s\n" "$tname" "$total" "$error" "$status"
done
echo "====================================="

# 保存报表
report_file="${LOG_DIR}/sync_report_$(date +%Y%m%d_%H%M%S).log"
{
    echo "数据同步任务汇总报告（DB2 → MySQL）"
    echo "==================="
    echo "执行时间: $(date)"
    echo "总表数量: $((${#success_tables[@]} + ${#fail_tables[@]}))"
    echo "成功数量: ${#success_tables[@]}"
    echo "失败数量: ${#fail_tables[@]}"
    echo ""
    echo "详细统计（DB2来源表：Schema.表名）："
    printf "%-40s %-15s %-15s %-10s\n" "DB2来源表(Schema.表名)" "总记录数" "错误记录数" "状态"
    echo "----------------------------------------"
    for stat in "${table_stats[@]}"; do
        IFS='|' read -r tname total error status <<< "$stat"
        printf "%-40s %-15s %-15s %-10s\n" "$tname" "$total" "$error" "$status"
    done
} > "$report_file"

echo "报表已保存至: $report_file"

# 退出逻辑
if [ ${#fail_tables[@]} -eq 0 ]; then
    echo "[SUCCESS] 所有DB2来源表同步成功！成功数量：${#success_tables[@]}"
    rm -f "${pid_file}"
    exit 0
else
    echo "[ERROR] 同步失败的表：${fail_tables[*]}"
    echo "[INFO] 成功同步数量：${#success_tables[@]}"
    rm -f "${pid_file}"
    exit 1
fi
