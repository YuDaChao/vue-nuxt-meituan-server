const mysql = require('mysql');
const config = require('../config/mysql');
const pool = mysql.createPool({
  connectionLimit : config.CONNECTION_LIMIT,
  host            : config.HOST,
  user            : config.USER,
  password        : config.PASSWORD,
  database        : config.DATABASE
});

// pool.on('connection', function (connection) {
//   console.log('---')
// });
//
// pool.on('enqueue', function () {
//   console.log('Waiting for available connection slot');
// });
//
// pool.on('release', function (connection) {
//   console.log('Connection %d released', connection.threadId);
// });

/**
 * 封装查询接口
 * @param sqlString 查询sql字符串
 * @param values 查询参数
 * @returns {Promise<any>} 返回Promise
 */
function query(sqlString, values) {
  return new Promise((resolve, reject) => {
    pool.getConnection(function (err, connection) {
      if (err) {
        reject(err);
        return
      }
      connection.query(sqlString, values, function (error, results, fields) {
        if (error) {
          reject(error);
          return
        }
        resolve(results);
        // 释放连接
        connection.release()
      })
    })
  }).catch(error => {
    console.error(`error sql: ${sqlString}`);
    console.error(`error info: ${error}`)
    return Promise.resolve(null)
  })
}

module.exports = query;
