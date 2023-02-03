 const miniDept = require('express').Router();
 const db = require('../../server')
 
 //? view all departments
 function viewDepts (){
    //* shows formatted table of department names and id
    db.query('SELECT * FROM department', function (err, results) {
      console.log(results);
    }
    )
  }

  //? add department
  function addDept(){
    //! prompted to enter name of department and add to data base
  }

  module.exports = miniDept;