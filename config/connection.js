const mysql = require("mysql");
let connection;
// const connection = mysql.createConnection({
//   port: 3306,
//   host: "localhost",
//   user: "root",
//   password: "root",
//   database: "burgers_db"
// });

if (process.env.JAWSDB_URL){
    connection.connect(process.env.JAWSDB_URL)
} else {
    connection = mysql.createConnection({
      port: 3306,
      host: "localhost",
      user: "root",
      password: "root",
      database: "burgers_db"
    });
}
connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

// Export connection for our ORM to use.
module.exports = connection;
