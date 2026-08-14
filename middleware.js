const Listing = require("./models/listing.js");
const Review = require("./models/review.js");
const expressError = require("./utility/expressError.js");
const { listingSchema, reviewSchema, bookingSchema } = require("./schema.js");

module.exports.isLoggedIn = (req, res, next) => {
  //console.log("Session is:", req.session);
  //console.log(req);
  //console.log(req.path, req.originalUrl); // path == user jya jvani try kre chhe te sign-up kyra pela, originalurl == jya jvani try krto hto tya sudhi no aakho path
  if (!req.isAuthenticated()) {
    // jvo user login krel hse atle req ma ani sername,email,password aavi jse ane e pachhi check thse
    //jo sign-up kyru hse to already sign-up hse to ny--badha pase aa req.session to hse j atle aaya j store karavi atle bija use kri sake redirectUrl
    req.session.redirectUrl = req.originalUrl; //req user na ression redirecturl namnu banayvu ama originalUrl nakhsu --- pn aa jvu user login krse avu passport sesson mathi badhu vadhara ni info remove kri dese atle aane local ma store krsu j passport assecc nthi kris saktu
    if (req.originalUrl.includes("/like")) {
      req.flash(
        "error",
        "You must be logged into wanderlust for liked listing!",
      );
    } else if (req.originalUrl.includes("/new")) {
      req.flash(
        "error",
        "you must be logged into wanderlust for create listing!",
      );
    } else {
      req.flash("error", "You must be logged into wanderlust!");
    }
    return res.redirect("/login");
  }
  next();
};

//local ma save karava export krvu pdse and locals ma save kravsu
module.exports.saveRedirectUrl = (req, res, next) => {
  if (req.session.redirectUrl) {
    res.locals.redirectUrl = req.session.redirectUrl;
  }
  next();
};

//edit update vakhte check karava curr user owner chhe k nhi
module.exports.isOwner = async (req, res, next) => {
  let { id } = req.params;
  let listing = await Listing.findById(id);
  // if (!listing.owner.equals(res.locals.currUser._id)) {
  //   req.flash("error", "you have not permition to edit");
  //   return res.redirect(`/listings/${id}`);
  // }
  if (!res.locals.currUser) {
    req.flash("error", "You must be logged in!");
    return res.redirect("/login");
  }

  if (!listing.owner.equals(res.locals.currUser._id)) {
    req.flash("error", "You do not have permission to edit");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

//validation-listing
module.exports.validatelisting = (req, res, next) => {
  let { error } = listingSchema.validate(req.body); // joi - indivudual field nei error takel krva use thay
  if (error) {
    let errmsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errmsg);
  } else {
    next();
  }
};

module.exports.validatereview = (req, res, next) => {
  let { error } = reviewSchema.validate(req.body); // joi - indivudual field nei error takel krva use thay
  if (error) {
    let errmsg = error.details.map((el) => el.message).join(",");
    throw new expressError(400, errmsg);
  } else {
    next();
  }
};

//reviews mate edit update vakhte check karava curr user owner chhe k nhi
module.exports.isRevieAuthor = async (req, res, next) => {
  let { id, reviewid } = req.params;
  let review = await Review.findById(reviewid);

  // Check if review exists
  if (!review) {
    req.flash("error", "Review does not exist!");
    return res.redirect(`/listings/${id}`);
  }

  // Check if user logged in
  if (!res.locals.currUser) {
    req.flash("error", "You must be logged in!");
    return res.redirect("/login");
  }

  //check author chhe k biju
  if (!review.author.equals(res.locals.currUser._id)) {
    req.flash("error", "you have not permition");
    return res.redirect(`/listings/${id}`);
  }

  next();
};

module.exports.validateBooking = (req, res, next) => {
  const { error } = bookingSchema.validate(req.body);

  if (error) {
    let errMsg = error.details.map((el) => el.message).join(",");

    throw new ExpressError(400, errMsg);
  } else {
    next();
  }
};
