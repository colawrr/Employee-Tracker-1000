const mysql = require('mysql');
const inquirer = require('inquirer');

require('console.table');


const connection = mysql.createConnection({
    host: "localhost",
    port: 3303,
    user: "root",
    password: "fjfj",
    database: "employees_db"
  });

  
  connection.connect(function(err) {
    if (err) throw err;

      options();
    
  });

  function options() {
    inquirer
    .prompt({
        name: "action",
        type: "list",
        message: "Welcome to our employee database! What would you like to do?",
        choices: [
                "Add an employee",
                "Add a department",
                "Update an employee",
                "Delete an employee",          
                "View all employees",
                "View all departments",
                "View all roles",
                "Add a role",
                "EXIT"
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case "View all employees":
                viewEmployees();
                break;
            case "View all departments":
                viewDepartments();
                break;
            case "Update an employee":
                updateRole();
                break;
            case "Delete an employee":
                deleteEmployee();
                break;        
            case "View all roles":
                viewRoles();
                break;
            case "Add an employee":
                addEmployee();
                break;
            case "Add a department":
                addDepartment();
                break;
            case "Add a role":
                addRole();
                break;
            case "EXIT": 
                exitApp();
                break;
            default:
                break;
        }
    })
};

function addEmployee() {
  
}

function addDepartment() {

}

function viewEmployees() {
  db.query = "SELECT * FROM employee";
  connection.query(query, function(err, res) {
    if (err) throw (err);
    console.log(res.length = "employees found!");
    console.table('All Employees:', res);
    exitApp();
  })
}

function updateRole() {

}

function deleteEmployee() {

}

function viewDepartments() {

}

function viewRoles() {

}

function addRole() {

}

function exitApp() {

}

  
module.exports = connection;