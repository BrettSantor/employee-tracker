const cTable = require('console.table');
const inquirer = require('inquierer');
const express = require('express');
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false}));
app.use(express.json());

const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
  });

  //todo call function to inquirer
  function startUp{
  inquirer
  .prompt([
    {
      type: list,
      message: 'What would you like to do?',
      choices: ['View all departments', 'View all roles', 'View all employees', 'Add department', 'Add role', 'Add employee', 'Update role'],
      name: 'choice'
    }
  ])
  .then((response) => {
    switch(response){
      case 'View all departments':
        viewDepts();
        break;
      case 'View all roles':
        viewRoles();
        break;
      case 'View all employees':
        viewEmpl();
        break;
      case 'Add department':
        addDept();
        break;
      case 'Add role':
        addRole();
        break;
      case 'Add employee':
        addEmpl();
        break;
      case 'Update role':
        upRole();
        break;
    }
  })
}
    //? view all departments
    function viewDepts (){
      //* shows formatted table of department names and id
    }
    //? view all roles
    function viewRoles (){
      //* shows formatted table of job title, role id, salary and department the role belongs to
    }
    //? view employees
    function viewEmpl(){
      //* shows formatted table of employee id, first name, last name, job title, departments, salaries, and manager of employee
    }
    //? add department
    function addDept(){
      //! prompted to enter name of department and add to data base
    }
    //? add role
    function addRole(){
      //! prompted to enter name, salary and department the role belongs to and add to database
    }
    //? add employee
    function addEmpl(){
      //! prompted employees first namne, last name, role and manager then added to the database
    }
    //? update employee role
    function upRole(){
      //prompted to select an employee to update to new role
    }



    app.listen(PORT, () => {
      console.log(`Catch the server on port ${PORT}`)
    });