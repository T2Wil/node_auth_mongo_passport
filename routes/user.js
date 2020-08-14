const Router = require("express").Router();
const User = require("../models/User");
const passport = require("passport");

Router.post("/login", passport.authenticate('local'),(req, res) => {
  req.login(req.body, (error) => {
    if (error) res.send(error);
    else {
      res.send({
        message: "Logged in successfully",
        user: req.user,
      });
    }
  });

});

Router.get("/loginSuccessRedirect", (req, res) => {
  res.send("Logged in!");
});

Router.get("/loginFailureRedirect", (req, res) => {
  res.send("Unauthorized access!");
});

Router.get("/logout", (req, res) => {
  req.logout();
  res.send("logged out!");
});

Router.get(
  "/dashboard",
  (req, res, next) => {
    if (req.isAuthenticated()) return next();
    else res.redirect("/api/loginFailureRedirect");
  },
  (req, res) => {
    res.send("Inside dashboard");
  }
);
module.exports = Router;
