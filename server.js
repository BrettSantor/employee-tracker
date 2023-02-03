const cTable = require('console.table');
const inquirer = require('inquirer');
const express = require('express');
const app = express();
const mysql = require('mysql2');
 const routes = require('./routes');


const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extended: false}));
app.use(express.json());
 app.use(routes);

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
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update role'],
      name: 'choice'
    }
  ])
  .then((response) => {
    console.log(response)
      switch (response.choice){
        case 'View all departments':
          console.log('it is working')
          addRole();
          break;
        case 'View all roles':
          console.log('roles')
            addRole();
            break;
        case 'View all employees':
          console.log('viewEmp')
              addRole();
              break;
        case 'Add employee':
          console.log('addEmp')
            addEmpl();
            break;
       case 'Add role':
        console.log('addrole')
         addRole();
         break;
       case 'Add employee':
        console.log('add emps')
         addEmpl();
         break;
       case 'Update role':
        console.log('ups role')
         upRole();
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
    
     startUp();