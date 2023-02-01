const cTable = require('console.table');
const inquirer = require('inquierer')
const mysql = require('mysql2');

const PORT = process.env.PORT || 3001;



const db = mysql.createConnection({
    host: 'localhost',
    user: 'root',
    password: 'password',
    database: 'employees_db'
  },
    console.log('You Will Be Assimilated')
  );

  //todo call function to inquirer
    //? view all departments
    //? view all roles
    //? view employees
    //? add department
    //? add role
    //? add employee
    //? update employee role
//todo function to view all departments
    //?