const dotenv = require("dotenv");
const mysql = require("mysql2");

dotenv.config();

const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

db.connect((err) => {
  if (err) {
    console.log("Failed to connect mysql :", err);
  } else {
    console.log("Connected to mysql");
  }
});

module.exports = db;
