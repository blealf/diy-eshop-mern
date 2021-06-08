const bcrypt = require("bcryptjs");
const User = require("../models").users;
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

passport.serializeUser((user, done) => {
  done(null, user.id);
});

passport.deserializeUser((id, done) => {
  User.findById(id, (err, user) => {
    done(err, user);
  });
});

passport.use(
  new LocalStrategy({ usernameField: "email" }, function(email, password, done){
    // Match User
    User.findOne({ email: email }, function(err, user){
      if (err) { return done(err) }
      if(!user){
        return done(null, false, {message: "User not found" });
      }
      bcrypt.compare(password, user.password, (err, isMatch) => {
        if (err) throw err;

        if (isMatch) {
          return done(null, user);
        } else {
          return done(null, false, {message: "Wrong password" });
        }
      })
    })
  })
)

module.exports = passport;