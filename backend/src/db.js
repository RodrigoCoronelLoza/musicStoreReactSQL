// const mysql = require("mysql2");
// const connection = mysql.createConnection({
//   host: "localhost",
//   user: "root",
//   password: "password",
//   database: "music_store",
// });
// module.exports = connection;
import mysql from "mysql";
// const mysql = require("mysql");

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "music_store",
});

// connection.connect(function (err) {
//   if (err) throw err;
//   console.log("Connected!");
// });

// module.exports = connection;
export default connection;
