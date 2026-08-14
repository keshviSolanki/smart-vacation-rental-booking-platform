const express = require("express");
const router = express.Router();
const wrapAcync = require("../utility/wrapAcync.js");
const passport = require("passport");
const { saveRedirectUrl } = require("../middleware.js");
const userController = require("../controller/user.js");

router
  .route("/signup")
  .get(userController.renderSignupForm) //signup form aavse -- peli var accountt banava
  .post(wrapAcync(userController.signup)); //signup form submit krva

router
  .route("/login")
  .get(userController.renderLoginForm) //login krva -- id banavel hoy ne pachhu open krva id pass thi //login form aavse
  .post(
    saveRedirectUrl, // jo login/signup na hoy to je mate signup/login krel tya redirect thava mate miidlewear file ma mention chhe
    passport.authenticate("local", {
      failureRedirect: "/login",
      failureFlash: true,
    }), // user existed chhe k nhi e check thse authentication method thi
    userController.login,
  ); //login form serve pase jse check thse valid user login kre chhek

router.get("/logout", userController.logout);

module.exports = router;
