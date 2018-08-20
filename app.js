/*
          Copyright mrychkov (c) 2018
          All Rights Reserved.
          Contact: contact@mrychkov.io
          MIT Licence
*/

const express = require('express');
const bodyParser = require('body-parser');

app = express();

app.set('views', 'views');
app.set('view engine', 'pug');

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

app.use('/img', express.static('public/img'));
app.use('/css', express.static('public/css'));
app.use('/js', express.static('public/js'));

const routes = require('./controllers/routes');
app.use('/', routes);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log('Magic happens on port' + PORT);
});
