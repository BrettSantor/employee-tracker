 const miniDept = require('express').Router();
 
 
 //? view all departments
 function viewDepts (){
    //* shows formatted table of department names and id
    miniDept.get('/', (req, res) => {
      readFromFile()
    })
  }

  //? add department
  function addDept(){
    //! prompted to enter name of department and add to data base
  }

  module.exports = miniDept;