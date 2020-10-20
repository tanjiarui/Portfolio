let express = require('express');
let router = express.Router();
let controller = require('../controllers/user');

/* GET home page */
router.get('/', function(req, res, next) {
  res.render('index');
});
/* CV */
router.get('/aboutme', function(req, res, next) {
  res.render('aboutme');
});
/* project */
router.get('/projects', function(req, res, next) {
  res.render('projects');
});
/* service */
router.get('/services', function(req, res, next) {
  res.render('services');
});
/* GET Route for display the login page */
router.get('/login', controller.display_login);
/* POST Route for processing the login page */
router.post('/login', controller.process_login);
/* GET Route for display the register page */
router.get('/register', controller.display_register);
/* POST Route for processing the register page */
router.post('/register', controller.process_register);
/* GET to perform logout */
router.get('/logout', controller.logout);
module.exports = router;