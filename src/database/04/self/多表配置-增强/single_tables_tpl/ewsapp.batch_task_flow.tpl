{
  "job": {
    "content": [
      {
        "reader": {
          "name": "rdbmsreader",
          "parameter": {
            "username": "{{DB2_USER}}",
            "password": "{{DB2_PWD}}",
            "column": [
              "ID", "PROC_DATE", "STEP", "STATUS", "SOURCE",
              "REMARK", "DURATION", "CREATE_BY", "UPDATE_BY",
              "CREATE_TIME", "UPDATE_TIME", "SHARD_INDEX",
              "SHARD_TOTAL", "MACHINE_IP"
            ],
            "where": "1=1",
            "connection": [
              {
                "jdbcUrl": ["{{DB2_JDBC_URL}}"],
                "table": ["EWSAPP.BATCH_TASK_FLOW"]
              }
            ]
          }
        },
        "writer": {
          "name": "mysqlwriter",
          "parameter": {
            "username": "{{MYSQL_USER}}",
            "password": "{{MYSQL_PWD}}",
            "column": [
              "ID", "PROC_DATE", "STEP", "STATUS", "SOURCE",
              "REMARK", "DURATION", "CREATE_BY", "UPDATE_BY",
              "CREATE_TIME", "UPDATE_TIME", "SHARD_INDEX",
              "SHARD_TOTAL", "MACHINE_IP"
            ],
            "connection": [
              {
                "jdbcUrl": "{{MYSQL_JDBC_URL}}",
                "table": ["batch_task_flow"]
              }
            ],
            "writeMode": "insert",
            "batchSize": 500,
            "writeTimeout": 60000
          }
        }
      }
    ],
    "setting": {
      "speed": {
        "channel": 1
      },
      "errorLimit": {
        "record": 0,
        "percentage": 0.02
      }
    }
  }
}