const mysql = require('mysql2/promise');
const dbConfig = require("../db.config.js");

async function query(sql, params) {
    const connection = await mysql.createConnection({
        host:dbConfig.HOST,
        user:dbConfig.USER,
        password:dbConfig.PASSWORD,
        database:dbConfig.DB,
    })
  const [results, ] = await connection.query(sql);

  return results;
}

module.exports = {
  query
}