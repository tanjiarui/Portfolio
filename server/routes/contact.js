let express = require('express');
let router = express.Router();

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

module.exports = router;