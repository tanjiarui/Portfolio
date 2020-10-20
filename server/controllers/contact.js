// create a reference to the model
let contact = require('../models/contact');

module.exports.display_list = (req, res) => {
  contact.find((err, list) => {
        if(err)
        {
            console.log(err);
            res.render('alert');
        }
        else
        {
            res.render('contact', {contact_list: list});
        }
    });
}

module.exports.display_edit = (req, res) => {
    let id = req.params.id || req.query.id;

    contact.findById(id, (err, edit_content) => {
        if(err)
        {
            console.log(err);
            res.render('alert');
        }
        else
        {
            //show the edit view
            res.render('edit', {title: 'update', edit: edit_content})
        }
    });
}

module.exports.process_edit = (req, res) => {
    let id = req.body.id;

    let item = {
        "name": req.body.name,
        "phone": req.body.phone,
        "email": req.body.email
    };
    contact.findOneAndUpdate(id, {$set:item}, (err) => {
        if(err)
        {
            console.log(err);
            res.render('alert');
        }
        else
        {
            // refresh the contact page
            res.redirect('/contact');
        }
    });
}

module.exports.delete = (req, res) => {
    let id = req.params.id || req.query.id;

    contact.deleteOne({_id: id}, (err) => {
        if(err)
        {
            console.log(err);
            res.render('alert');
        }
        else
        {
            // refresh the contact page
            res.redirect('/contact');
        }
    });
}