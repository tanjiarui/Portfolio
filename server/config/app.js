const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
// authentication setup
const session = require('express-session');
const passport = require('passport');
const flash = require('connect-flash');
const local_strategy = require('passport-local').Strategy;
// database setup
const mongoose = require('mongoose');
const db = require('./db');

// connect mongoose to the db URI
mongoose.connect(db.URI, {useNewUrlParser: true, useUnifiedTopology: true, useFindAndModify: false});
const mongoDB = mongoose.connection;
mongoDB.on('error', console.error.bind(console, 'Connection Error:'));
mongoDB.once('open', ()=>{
  console.log('Connected to MongoDB...');
});

const index_router = require('../routes/index');
const contact_router = require('../routes/contact');
const app = express();

// view engine setup
app.set('views', path.join(__dirname, '../views'));
app.set('view engine', 'ejs');
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

// setup session
app.use(session({secret:'some',saveUninitialized:false,resave:false}));
// initialize flash
app.use(flash());
// initialize passport
app.use(passport.initialize());
app.use(passport.session());

// create a user instance
const user_model = require('../models/user');
const user = user_model.user;
// authentication strategy
passport.use(new local_strategy(
  function(username, password, done) {
    user.findOne({ username: username }, function (err, user) {
      if (err) { return done(err); }
      if (username !== user.username) { return done(null, false); }
      if (password !== user.password) { return done(null, false); }
      return done(null, user);
    });
  }
));
// serialize and deserialize the user info
passport.serializeUser(user.serializeUser());
passport.deserializeUser(user.deserializeUser());

// bind static resource
app.use('/public',express.static(path.join(__dirname, '../../public')));
app.use('/', index_router);
app.use('/contact', contact_router);

// catch 404 and forward to error handler
app.use(function(res){
	res.render('error')
});

// error handler
app.use((err, req, res) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;