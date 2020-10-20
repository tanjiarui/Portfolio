let mongoose = require('mongoose');
let passport_local_mongoose = require('passport-local-mongoose');

// create a collection
let user = mongoose.Schema({
  username:
  {
    type:String,
    default:'',
    trim:true,
    required:'username is required'
  },
  password:
  {
    type:String,
    default:'',
    trim:true,
    required:'password is required'
  },
  email:
  {
    type:String,
    default:'',
    trim:true,
    required:'email is required'
  },
  display_name:
  {
    type:String,
    default:'',
    trim:true,
    required:'display name is required'
  },
  created:
  {
    type:Date,
    default:Date.now,
  },
  update:
  {
    type:Date,
    default:Date.now,
  }
},
{
  collection: "user"
});

// configure options for user
let options = ({missing_password_error: 'wrong / missing password'});
user.plugin(passport_local_mongoose,options);

module.exports.user = mongoose.model('user', user);