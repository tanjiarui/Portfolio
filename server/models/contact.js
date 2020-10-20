let mongoose = require('mongoose');

// create a collection
let contact = mongoose.Schema({
    name: String,
    phone: String,
    email: String
},
{
    collection: "contact"
});

module.exports = mongoose.model('contact', contact);