const mysql = require('mysql2/promise');
const { HOST, DBPORT, USER, PASSWORD, DATABASE } = process.env;
  
const pool = mysql.createPool({
  host: HOST,
  port: DBPORT,
  user: USER,
  password: PASSWORD,
  database: DATABASE,
  dateStrings: "date",    
});

module.exports = pool;