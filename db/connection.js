const mysql = require('mysql');
const inquirer = require('inquirer');
const consoleTable = require('console.table');


const connection = mysql.createConnection({
    host: 'localhost',
    port: 3303,
    user: 'root',
    password: 'fjfj',
    database: 'employees_db'
  });

  
  connection.connect(function(err) {
    if (err) throw err;

      options();
    
  });

  function options() {
    inquirer
    .prompt({
        name: 'action',
        type: 'list',
        message: 'Welcome to our employee database! What would you like to do?',
        choices: [
                'Add an employee',
                'Add a department',
                'Update an employee',
                'Delete an employee',          
                'View all employees',
                'View all departments',
                'View all roles',
                'Add a role',
                'EXIT'
        ]
    }).then(function (answer) {
        switch (answer.action) {
            case 'View all employees':
                viewEmployees();
                break;
            case 'View all departments':
                viewDepartments();
                break;
            case 'Update an employee':
                updateRole();
                break;
            case 'Delete an employee':
                deleteEmployee();
                break;        
            case 'View all roles':
                viewRoles();
                break;
            case 'Add an employee':
                addEmployee();
                break;
            case 'Add a department':
                addDepartment();
                break;
            case 'Add a role':
                addRole();
                break;
            case 'EXIT': 
                exitApp();
                break;
            default:
                break;
        }
    })
};

function addEmployee() {

  db.query = 'SELECT * FROM role', function (err, res) {
    if (err) throw (err);
    inquirer
      .prompt([
        {
          name: 'first_name',
          type: 'input',
          message: "What is the employee's first name?"
        },
        {
          name: 'last_name',
          type: 'input',
          message: "What is the employee's last name?"
        },
        
        {
          name: 'role', 
          type: 'list',
          choices: function() {
          let roleArray = [];
          for (let i = 0; i < res.length; i++) {
              roleArray.push(res[i].title);
          }
          return roleArray;
          },
          message: "What is this employee's role? "
      }
      ]).then(function (answer) {
          let roleID;
          for (let a = 0; a < res.length; a++) {
          if (res[a].title == answer.role) {
              roleID = res[a].id;
              console.log(roleID)
          }                  
          }  
          connection.query(
          'INSERT INTO employee SET ?',
          {
              first_name: answer.first_name,
              last_name: answer.last_name,
              role_id: roleID,
          },
          function (err) {
              if (err) throw err;
              console.log('Your employee has been added!');
              options();
          })
      })
  }
};

function addDepartment() {

}

function viewEmployees() {
  db.query = 'SELECT * FROM employee';
  connection.query(query, function(err, res) {
    if (err) throw (err);
    console.log(res.length = 'employees found!');
    console.table('All Employees:', res);
    options();
  })
};

function updateRole() {

}

function deleteEmployee() {

}

function viewDepartments() {
  db.query = 'SELECT * FROM department';
  connection.query(query, function(err, res) {
    if (err) throw (err);
    console.log(res.length = 'department found!');
    console.table('All Departments:', res);
    options();
  })
};


function viewRoles() {
  db.query = 'SELECT * FROM role';
  connection.query(query, function(err, res) {
    if (err) throw (err);
    console.log(res.length = 'roles found!');
    console.table('All Roles:', res);
    options();
  })
};


function addRole() {

}

function exitApp() {
  
  connection.end();

};  

  
module.exports = connection;