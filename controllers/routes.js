const routes = require('express').Router();

routes.get('/', (req, res) => {
  res.status(200);
  res.render('landing');
});

module.exports = routes;
