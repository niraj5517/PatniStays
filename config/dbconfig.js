var mysql = require('mysql');
// var connection = mysql.createConnection({
//     host     : 'localhost',
//     user     : 'niraj',
//     password : 'Niraj@5517',
//     database : 'PatniStaysDB'
// });

var connection = mysql.createConnection({
    host: "localhost",
    user: "niraj",
    password: "Niraj@5517",
    database:"newschemass"
  });

connection.connect(function(err) {
    if (err) {console.log("not connected");throw err;}
    else{console.log("connected");}
});

module.exports = connection;