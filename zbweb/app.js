var express = require('express');
var path = require('path');
var favicon = require('serve-favicon');
var logger = require('morgan');
var cookieParser = require('cookie-parser');
var bodyParser = require('body-parser');
var session = require('express-session');


var routes = require('./routes/index');
var reg = require('./routes/reg');
var login = require('./routes/login');
var logout = require('./routes/logout');



var app = express();

//app.use(cookieParser("An"));
//app.use(session({
//
//  secret:'an',
//
//  resave:false,
//
//  saveUninitialized:true
//
//}));
//这里传入了一个密钥加session id
app.use(cookieParser('Wilson'));
//使用靠就这个中间件
app.use(session({ secret: 'wilson'}));
// view engine setup
app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

// uncomment after placing your favicon in /public
//app.use(favicon(path.join(__dirname, 'public', 'favicon.ico')));
app.use(logger('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));

app.use('/', routes);
app.use('/reg', reg);
app.use('/login', login);
app.use('/logout', logout);


// catch 404 and forward to error handler
app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

// error handler
app.use(function(err, req, res, next) {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;
console.log(1);
app.listen(3000);