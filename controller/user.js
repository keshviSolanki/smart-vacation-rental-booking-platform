const User = require("../models/user.js");

module.exports.renderSignupForm =  (req,res) => {
    res.render("users/signup.ejs");
};


module.exports.signup = async(req,res) => {
    try {                                          // try block no use krvathi user already existed hse to ej page pr signup vala pag pr j msg flash thse
         let {username, email, password} = req.body;
        const newUser = new User({email, username});
        const registeredUser = await User.register(newUser, password);
        req.login(registeredUser, (err) => {  // signup krse atle pachhu login nhi krvu pde khali log-out nuj option aavse
            if(err) {
                return next(err);
            }
            req.flash("success", "welecom to the wanderlust")
            res.redirect("/listings");
        })
    } catch(e) {
        req.flash("error", e.message);
        res.redirect("/signup");
    }
   
};


module.exports.renderLoginForm = (req,res) => {
    res.render("users/login.ejs");
};


module.exports.login =  async(req,res) => {
        req.flash("success", "welecom to wanderlust!...  you are logged in  :) ");
        res.redirect(res.locals.redirectUrl || "/listings"); // je path pr jva mate user ne sign-up krvani jarur pde te path pr sign-up kri pochi jse
};


module.exports.logout =  (req,res,next) => {
    req.logout((err) => {  // passport ma aa pn inbuilt chhe currnt session ma j user hse ane log out kri ane releted data session mathi remove kri dese
        if(err) {
           return next(err);
        }
        req.flash("success", "you are logged out ! ");
        res.redirect("/listings");
    })
};