// Set up MySQL connection.
var mysql = require("mysql");

var connection;


connection = mysql.createConnection(process.env.JAWSDB_URL);


// Make connection.
connection.connect(function(err) {
    if (err) {
        console.error("error connecting: " + err.stack);
        return;
    }
    console.log("connected as id " + connection.threadId);
});

// Export connection for our ORM to use.
module.exports = connection;

