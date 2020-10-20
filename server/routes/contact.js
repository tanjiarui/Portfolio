let express = require('express');
let router = express.Router();
<<<<<<< HEAD
=======
<<<<<<< Updated upstream

let controller = require('../controllers/contact');

/* GET Route for the contact page - read operation */
router.get('/', controller.display_list);

/* GET Route for displaying the edit page - update operation */
router.get('/edit', controller.display_edit);
router.get('/edit/:id', controller.display_edit);

/* POST Route for processing the edit page - update operation */
router.post('/edit/:id', controller.process_edit);

/* GET to perform deletion - delete operation */
router.get('/delete', controller.delete);
router.get('/delete/:id', controller.delete);
=======
>>>>>>> 4445f50d056d8f8930beca3f79033f0ba1988cd7
let controller = require('../controllers/contact');

// guard handler
function require_auth(req,res,next)
{
  // judge login state
  if(!req.isAuthenticated())
  {
    return res.redirect('/login');
  }
  next();
}

/* GET Route for the contact page - read operation */
router.get('/', require_auth, controller.display_list);

/* GET Route for displaying the edit page - update operation */
router.get('/edit', require_auth, controller.display_edit);
router.get('/edit/:id', require_auth, controller.display_edit);

/* POST Route for processing the edit page - update operation */
router.post('/edit/:id', require_auth, controller.process_edit);

/* GET to perform deletion - delete operation */
router.get('/delete', require_auth, controller.delete);
router.get('/delete/:id', require_auth, controller.delete);
<<<<<<< HEAD
=======
>>>>>>> Stashed changes
>>>>>>> 4445f50d056d8f8930beca3f79033f0ba1988cd7

module.exports = router;