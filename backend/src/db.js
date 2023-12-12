import mysql from "mysql";

const connection = mysql.createConnection({
  host: "localhost",
  user: "root",
  password: "password",
  database: "music_store",
});

export default connection;
