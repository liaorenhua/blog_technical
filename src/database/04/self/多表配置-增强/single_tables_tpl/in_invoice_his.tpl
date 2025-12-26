{
  "job": {
    "content": [
      {
        "reader": {
          "name": "rdbmsreader",
          "parameter": {
            "username": "{{DB2_USER}}",
            "password": "{{DB2_PWD}}",
            "column": ["id", "PROC_DATE", "CTR_NO", "INV_CODE", "INV_NO", "BU_CODE", "CREATE_TIME", "CREATE_BY"],
            "where": "proc_date > '20251225'",
            "connection": [
              {
                "jdbcUrl": ["{{DB2_JDBC_URL}}"],
                "table": ["EWSAPP.IN_INVOICE_HIS"]
              }
            ]
          }
        },
        "writer": {
          "name": "mysqlwriter",
          "parameter": {
            "username": "{{MYSQL_USER}}",
            "password": "{{MYSQL_PWD}}",
            "column": ["id", "PROC_DATE", "CTR_NO", "INV_CODE", "INV_NO", "BU_CODE", "CREATE_TIME", "CREATE_BY"],
            "connection": [
              {
                "jdbcUrl": "{{MYSQL_JDBC_URL}}",
                "table": ["IN_INVOICE_HIS"]
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