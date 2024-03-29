var express = require('express');
var path = require('path');
var cookieParser = require('cookie-parser');
var logger = require('morgan');
const session = require('express-session');
const bodyParser = require('body-parser');
var brcypt = require('bcrypt');

var indexRouter = require('./routes/index');
var studentsRouter = require('./routes/students');

var app = express();

//const port = process.env.PORT || 5555;

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', indexRouter);
app.use('/students', studentsRouter);

/*
app.listen(port, () => {
    console.log("App is running on port " + port);
  });*/

const ip = '10.0.2.100'; // Your specific IP address
const port = 5555; // Port number

app.listen(port, ip, () => {
  console.log(`Server running at ${ip}:${port}/`);
});

module.exports = app;
