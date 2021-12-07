const mysql = require('mysql');
const inquirer = require('inquirer');

require('console.table');


var connection = mysql.createConnection({
    host: "localhost",
    port: 3303,
    user: "root",
    password: "fjfj",
    database: "employees_db"
  });

  
  connection.connect(function(err) {
    if (err) {
      console.error("error connecting: " + err.stack);
      return;
    }
    console.log("connected as id " + connection.threadId);
  });

  
  module.exports = connection;