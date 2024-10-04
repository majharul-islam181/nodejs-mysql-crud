
const mysql = require('mysql2/promise');

const mysql2Pool = mysql.createPool({
  host: 'localhost',
  user: 'root',
  password: 'majharul01521405117',
  database: 'student_db',
//   waitForConnections: true,
//   connectionLimit: 10,  
//   queueLimit: 0
});


module.exports = mysql2Pool;
