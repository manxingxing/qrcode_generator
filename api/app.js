var createError = require('http-errors');
var express = require('express');
var cookieParser = require('cookie-parser');
const bodyParser = require('body-parser');
var logger = require('morgan');
var cors = require("cors");
var exceptionHandler = require('./middlewares/exception_handler');

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(bodyParser.json());
app.use(bodyParser.text({ limit: "5mb" }));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(cors());

app.get('/', function(req, res) {
  res.send('hello world');
})

app.use('/qrcode', require('./controllers/qrcode'));

// catch 404 and forward to error handler
app.use(function(req, res, next) {
  next(createError(404, 'Not Found'));
});

// error handler
app.use(exceptionHandler);

module.exports = app;
