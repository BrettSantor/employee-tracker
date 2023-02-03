const cTable = require('console.table');
const inquirer = require('inquirer');
const express = require('express');
const app = express();
const mysql = require('mysql2');


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employee_db'
  });

  //todo call function to inquirer
  function startUp(){
  inquirer
    .prompt([
    {
      type: 'list',
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update employee role'],
      name: 'choice'
    }
  ])
  .then((response) => {
      switch (response.choice){
        case 'View all departments':
         db.query('SELECT * FROM department', function (err, results) {
          console.table(results);
          startUp();
         })
          break;
        case 'View all roles':
          db.query('SELECT * FROM role', function (err, results) {
            console.table(results);
            startUp();
          })
            break;
        case 'View all employees':
          db.query('SELECT * FROM employee', function (err, results) {
            console.table(results);
            startUp();
          })
              break;
        case 'Add employee':
         inquirer
.prompt([{
            message: 'Please enter employees first name',
            name: 'firstName'},
          {
            message: 'Please enter employees last name',
            name: 'lastName'
          },
          {
            message: 'Please enter employees role id',
            name: 'role'
          },
          {
            messge: 'Please enter employees manager id',
            name: 'manager'
          }
]).then((response) => {
console.log(response)
const sql =  `INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES (?, ?, ?, ?)`;
const params = [response.firstName, response.lastName, response.role, response.manager];
   db.query(sql, params, (err, result) => {
    if (err) throw err;
    console.log('ya did it')
    startUp();
    })
})
            break;
       case 'Add role':
        inquirer
        .prompt([
          {
            message: "What is the role title",
            name: 'title'
          },
          {
            message: 'what is the salary for this role?',
            name: 'salary'
          },
          {
            message: 'what is the department id this role belongs to?',
            name: 'department'
          }
        ])
        .then((response) => {
        console.log('addrole')
        const sql =  `INSERT INTO role (title, salary, department_id) VALUES (?, ?, ?)`;
const params = [response.title, response.salary, response.department];
   db.query(sql, params, (err, result) => {
    if (err) throw err;
    console.log('ya did it')
   })})
         startUp();
         break;
       case 'Add department':
        inquirer
        .prompt([
          {
            message: "What is the department name?",
            name: 'name'
          }
        ])
        .then((response) => {
        const sql =  `INSERT INTO department (name) VALUES (?)`;
const params = [response.title, response.name];
   db.query(sql, params, (err, result) => {
    if (err) throw err;
    console.log('ya did it')
   })})
         startUp();
         break;
       case 'Update employee role':
        updateEmp();
         break;
      default:
        console.log('Something has gone wrong');
     }
    })
   .catch((err) => {
    console.log(err)
   })
    }
   



    app.listen(PORT, () => {
      console.log(`Big Brother is listening at http://localhost:${PORT}`)
    });
    

    async function updateEmp() {
      let employees = await new Promise((resolve, reject) => {
      db.query(`SELECT first_name FROM employee`, (err, res) => {
        if (err) reject(err);
        resolve(res.map((obj) => obj.first_name));
      })
      })
        inquirer.prompt([{
          type: 'list',
          message: 'Select employee to update',
          name: 'employee',
          choices: employees
        }])
      .then((res) => {
        updateRole(res.employee)
      })
      ;}

    async function updateRole(employee) {
      let roles = await new Promise((resolve, reject) => {
      db.query(`SELECT * FROM role`, (err, res) => {
        if (err) reject(err);
        let role = res;
        resolve(res.map((obj) => obj.title));
        console.log(role);
      })
      })
        inquirer.prompt([{
          type: 'list',
          message: 'Select role',
          name: 'role',
          choices: roles
        }])
      .then((res) => {
        console.log(res)
        console.log(employee+ " " + res.role)
        const sql = db.query('SELECT id FROM role WHERE ? = role.title')
const params = [res.role]
        db.query( sql, params, (err, res) => {
         if(err) throw err;
        console.log(res)
        startUp();
       })
       
      })
      ;}


     startUp();