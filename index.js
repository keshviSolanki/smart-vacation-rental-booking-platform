const dotenv = require("dotenv");
dotenv.config();

const express = require("express");
const app = express();

const mongoose = require("mongoose");
const path = require("path");
const methodOverride = require("method-override");
const ejsMate = require("ejs-mate");
const sessionSecret = process.env.SESSION_SECRET;
const expressError = require("./utility/expressError.js");

const session = require("express-session");
const flash = require("connect-flash");

const passport = require("passport");
const LocalStrategy = require("passport-local");

const MongoStore = require("connect-mongo");

// MODELS
const User = require("./models/user.js");

// ROUTES
const listingsRouter = require("./routes/listing.js");
const reviewsRouter = require("./routes/review.js");
const userRouter = require("./routes/user.js");
const weatherRouter = require("./routes/weather.js");
const bookingRouter = require("./routes/booking.js");
const profileRoutes = require("./routes/profile.js");

// =========================
// DATABASE
// =========================
// Fix MongoDB Atlas DNS issue (optional)
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);
const mongo_url = process.env.MONGO_URL;

mongoose
  .connect(mongo_url)
  .then(() => console.log("connected to db"))
  .catch((err) => console.log(err));

// =========================
// VIEW ENGINE
// =========================
app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"));
app.engine("ejs", ejsMate);

// =========================
// BASIC MIDDLEWARE
// =========================
app.use(express.urlencoded({ extended: true }));
app.use(methodOverride("_method"));
app.use(express.static(path.join(__dirname, "public")));

// =========================
// SESSION STORE
// =========================
const store = MongoStore.create({
  mongoUrl: mongo_url,
  crypto: {
    secret: sessionSecret,
  },
  touchAfter: 24 * 3600,
});

// =========================
// SESSION CONFIG (ONLY ONCE)
// =========================
app.use(
  session({
    store,
    secret: sessionSecret,
    resave: false,
    saveUninitialized: false,
    cookie: {
      maxAge: 7 * 24 * 60 * 60 * 1000,
      httpOnly: true,
    },
  }),
);

// =========================
// FLASH
// =========================
app.use(flash());

// =========================
// PASSPORT CONFIG
// =========================
app.use(passport.initialize());
app.use(passport.session());

passport.use(new LocalStrategy(User.authenticate()));
passport.serializeUser(User.serializeUser());
passport.deserializeUser(User.deserializeUser());

// =========================
// GLOBAL LOCALS (VERY IMPORTANT)
// =========================
app.use((req, res, next) => {
  res.locals.currUser = req.user || null;
  res.locals.success = req.flash("success") || [];
  res.locals.error = req.flash("error") || [];
  next();
});

// =========================
// ROUTES
// =========================
app.use("/listings", listingsRouter);
app.use("/listings/:id/reviews", reviewsRouter);
app.use("/", userRouter);
app.use("/weather", weatherRouter);
app.use("/bookings", bookingRouter);
app.use("/profile", profileRoutes);

// =========================
// 404 ROUTE
// =========================
app.use((req, res, next) => {
  next(new expressError(404, "Page Not Found"));
});

// =========================
// ERROR HANDLER
// =========================
app.use((err, req, res, next) => {
  let { statusCode = 500, message = "Something went wrong" } = err;
  res.status(statusCode).render("error.ejs", { err });
});

// =========================
// SERVER
// =========================
const PORT = process.env.PORT || 8080;

app.listen(PORT, () => {
  console.log(`app is listening on port ${PORT}`);
});
