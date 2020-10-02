const express = require('express');
const router = express.Router();

/*GET home page*/
router.get('/', function(req, res, next) {
  res.render('index');
});
/*CV*/
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme');
});
/*project*/
router.get('/projects', function(req, res, next) {
  res.render('projects');
});
/*service*/
router.get('/services', function(req, res, next) {
  res.render('services');
});
/*contactme*/
router.get('/contactme', function(req, res, next) {
  res.render('contactme');
});
module.exports = router;