{
  "job": {
    "content": [
      {
        "reader": {
          "name": "rdbmsreader",
          "parameter": {
            "username": "{{DB2_USER}}",
            "password": "{{DB2_PWD}}",
            "column": ["LAST_PROC_DATE", "PROC_DATE", "NEXT_PROC_DATE", "STATUS", "UPDATE_TIME"],
            "where": "1=1",
            "connection": [
              {
                "jdbcUrl": ["{{DB2_JDBC_URL}}"],
                "table": ["EWSAPP.BATCH_DATE"]
              }
            ]
          }
        },
        "writer": {
          "name": "mysqlwriter",
          "parameter": {
            "username": "{{MYSQL_USER}}",
            "password": "{{MYSQL_PWD}}",
            "column": ["LAST_PROC_DATE", "PROC_DATE", "NEXT_PROC_DATE", "STATUS", "UPDATE_TIME"],
            "connection": [
              {
                "jdbcUrl": "{{MYSQL_JDBC_URL}}",
                "table": ["batch_date"]
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