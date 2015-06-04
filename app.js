var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');
var flash = require('connect-flash');
var passport = exports.passport = require('passport');

//var routes = require('./routes/index');
//var users = require('./routes/user');


//archivo de configuracion
var config = require('./config.js');

//uso de mongoose
var mongoose = require('mongoose');
//fixtures
var fixtures = require('mongoose-fixtures');

mongoose.connect(config.mongoDB.url);

fixtures.load('./fixtures/admins.js');
fixtures.load('./fixtures/employees.js');

//stylus
var stylus = require('stylus');

var app = exports.app = express();

// view engine setup

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'jade');

// stylus setup
app.use('/css', stylus.middleware({
  src: __dirname + '/resources/stylus',
  dest: __dirname + '/public/css',
  compile: function (str, path) {
    return stylus(str)
      .set('filename', path)
      .set('compress', true);
  }
}));

var env = process.env.NODE_ENV || 'development';
app.locals.ENV = env;
app.locals.ENV_DEVELOPMENT = env == 'development';

// app.use(favicon(__dirname + '/public/img/favicon.ico'));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({
  extended: true
}));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(session({secret: 'supersecret', saveUninitialized: true, resave: true}));
app.use(passport.initialize());
app.use(passport.session());
app.use(flash());

require('./auth/local-strategy.js');

//app.use('/', routes);
//app.use('/users', users);

//rutas en archivo aparte
require('./routes/main.js');

/// catch 404 and forward to error handler
app.use(function(req, res, next) {
    var err = new Error('Not Found');
    err.status = 404;
    next(err);
});

/// error handlers

// development error handler
// will print stacktrace

if (app.get('env') === 'development') {
    app.use(function(err, req, res, next) {
        res.status(err.status || 500);
        res.render('error', {
            message: err.message,
            error: err,
            title: 'error'
        });
    });
}

// production error handler
// no stacktraces leaked to user
app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    res.render('error', {
        message: err.message,
        error: {},
        title: 'error'
    });
});


module.exports = app;
