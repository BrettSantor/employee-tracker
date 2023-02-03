const miniApp = require('express').Router();

const apiRoutes = require('./api/');

miniApp.use('./api/', apiRoutes);

miniApp.use((req, res) => {
    res.status(404).end();
  });

module.exports = miniApp;