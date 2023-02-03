const miniApp = require('express').Router();


 const depRouter = require('./api/department')
 const roleRouter = require('./api/role')
 const empRouter = require('./api/employee')

   miniApp.use('/department', depRouter);
   miniApp.use('/role', roleRouter);
   miniApp.use('/employee', empRouter);

// miniApp.use((req, res) => {
//     res.status(404).end();
//   });

module.exports = miniApp;