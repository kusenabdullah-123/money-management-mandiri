const mysql2 = require("mysql2");
const connection = mysql2.createConnection({
  user: "root",
  password: "root",
  host: "localhost",
  database: "keuangan",
});
connection.connect((err) => {
  err ? console.log(error) : console.log("connected");
});
module.exports = connection;
