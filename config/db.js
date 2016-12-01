const mysql = require('mysql')

exports.query = (sql, params = [], callback) => {
  const connection = mysql.createConnection({
    connectionLimit : 500,
    host: 'localhost',
    port: 3306,
    user: 'root',
    password: 'jing',
    database: 'educata'
  })
  connection.query(sql, params, (err, rows) => {
    if (err) {
      return callback(err)
    }
    callback(null, rows)
    // 操作完毕，结束连接
    connection.end()
  })
}
