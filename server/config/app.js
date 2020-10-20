const createError = require('http-errors');
const express = require('express');
const path = require('path');
const cookieParser = require('cookie-parser');
const logger = require('morgan');

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
// bind static resource
app.use('/public',express.static(path.join(__dirname, '../../public')));

app.use('/', index_router);
app.use('/contact', contact_router);

// catch 404 and forward to error handler
app.use((req, res, next) => {
  next(createError(404));
  res.render('error');
});

// error handler
app.use((err, req, res, next) => {
  // set locals, only providing error in development
  res.locals.message = err.message;
  res.locals.error = req.app.get('env') === 'development' ? err : {};

  // render the error page
  res.status(err.status || 500);
  res.render('error');
});

module.exports = app;