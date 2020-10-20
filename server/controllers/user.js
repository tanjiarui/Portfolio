let passport = require('passport');
// create a user instance
let user_model = require('../models/user');
let user = user_model.user;

module.exports.display_login = (req,res) => {
  // judge login state
  if(!req.user)
  {
    res.render('login',
    {
      messages:req.flash('login_message'),
      display_name:req.user?req.user.display_name:''
    });
  }
  else
  {
    return res.redirect('/');
  }
}

module.exports.process_login = (req,res,next) => {
  passport.authenticate('local',
  (err,user) => {
    // server error
    if(err)
    {
      return next(err);
    }
    // login error
    if(!user)
    {
      req.flash('login mrssage','authentication error');
      return res.redirect('/login');
    }
    req.login(user,(err)=>{
      // server error
      if(err)
      {
        return next(err);
      }
      return res.redirect('/contact');
    });
  })(req,res,next);
}

module.exports.display_register = (req,res) => {
  // judge login state
  if(!req.user)
  {
    res.render('register',
    {
      messages:req.flash('register_messages'),
      display_name:req.user?req.user.display_name:''
    });
  }
  else
  {
    return res.redirect('/');
  }
}

module.exports.process_register = (req,res) => {
 let new_user = new user({
   username:req.body.username,
   password:req.body.password,
   email:req.body.email,
   display_name:req.body.display_name
 });
  user.register(new_user,req.body.password,(err)=>{
  if(err)
  {
    console.log('insert new user error');
    if(err.name=='UserExistsError')
    {
      req.flash('register message','user already exists');
      console.log('user already exists');
    }
    res.render('register',
    {
      messages:req.flash('register_messages'),
      display_name:req.user?req.user.display_name:''
    });
  }
  else
  {
    // successful registration
    return passport.authenticate('local')(req,res,() => {
      res.redirect('/contact');
    });
  }
 });
}

module.exports.logout = (req,res) => {
  req.logout();
  res.redirect('/');
}