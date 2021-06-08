module.exports = app => {
  const express = require("express");
  const router = express.Router();
  const passport = require("passport");
  
  router.post('/login', function(req, res, next) {
    passport.authenticate('local', function(err, user, info) {
      if (err) { return next(err); }
      if (!user) { return res.redirect('/login'); }
      req.logIn(user, function(err) {
        if (err) { return next(err); }
        return res.redirect('/api/users/' + user.id);
      });
    })(req, res, next);
  });

  // router.post("/login", 
  //   passport.authenticate('local'),
  //   function(req, res){
  //     res.redirect("/api/users/" + req.user.id)
  //   })
  
  app.use("/api", router)
}
