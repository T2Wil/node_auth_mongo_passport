const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;
const User = require('../models/User');

passport.use(
  new LocalStrategy(
    { usernameField: "email" },
    (email, password, done) => {
      User.findOne({email})
      .then((user) => {
          if(!user) {
              done(null,false,{message: 'user not found'})
          }
          else{
              if(user.password === password) {
                  done(null,user);
              }
              else done(null,false,{message: 'wrong password'})
          }
      })
      .catch(error => done(error))
    }
  )
);

passport.serializeUser(function(user, done) {
    done(null, user);
  });
   
  passport.deserializeUser(function(user, done) {
    done(null, user);
  });
module.exports = passport;