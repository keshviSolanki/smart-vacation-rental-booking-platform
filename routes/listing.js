// const express = require("express");
// const router = express.Router();
// const wrapAcync = require("../utility/wrapAcync.js");
// const Listing = require("../models/listing.js");
// const User = require("../models/user.js");
// const { isLoggedIn, isOwner, validatelisting } = require("../middleware.js");
// const listingController = require("../controller/listing.js");
// const multer = require("multer"); //form na data ne parse krva multer no use krsu
// const { storage } = require("../cloudConflig.js");
// const upload = multer({ storage });
// //const upload = multer({ dest: 'uploads/' }); //by default multer set krse k j form ma file upload thay aavse e kya stoe thse ane path chhe
// upload.single("listing[image]");

// router
//   .route("/")
//   .get(wrapAcync(listingController.index)) //index route     http://localhost:8080/listings
//   .post(
//     isLoggedIn,
//     upload.single("listing[image]"),

//     (req, res) => {
//       console.log("🔥 AFTER MULTER");
//       console.log("BODY:", req.body);
//       console.log("FILE:", req.file);

//       res.send("CHECK DONE");
//     },
//     // upload.single("listing[image]"),
//     // (req, res) => {
//     //   console.log("HIT ROUTE");
//     //   console.log("BODY:", req.body);
//     //   console.log("FILE:", req.file);

//     //   res.send("OK");
//     // },
//     // isLoggedIn,
//     // upload.single("listing[image]"), // multer process kri img data ne req.file ma lavse
//     // (req, res, next) => {
//     //   console.log("🔥 BODY:", req.body);
//     //   console.log("🔥 FILE:", req.file);
//     //   next();
//     // },
//     // validatelisting,
//     // wrapAcync(listingController.createListing),
//   ); //create//form submiting and store in db // create

// //local ma photos file save karava uploads folder ma
// // .post(upload.single("listing[image]"), (req,res) => {
// //     res.send(req.file);
// // })

// //new rout
// // form aapde new create krva
// router.get("/new", isLoggedIn, listingController.renderNewForm);

// /*  CATEGORY ROUTE HERE */
// router.get("/category/:category", async (req, res) => {
//   let { category } = req.params;

//   console.log(category);

//   const alllistings = await Listing.find({
//     categories: category,
//   });

//   console.log(alllistings);

//   res.render("listings/index.ejs", { alllistings });
// });

// //search-box
// router.get("/search", async (req, res) => {
//   let { q } = req.query;

//   let searchConditions = [
//     { location: { $regex: q, $options: "i" } }, // regex = jyare koi catagory no option search tyare, i = case sensetiv mate
//     { country: { $regex: q, $options: "i" } },
//     { title: { $regex: q, $options: "i" } },
//     { categories: { $regex: q, $options: "i" } },
//   ];

//   // if user searches number
//   if (!isNaN(q)) {
//     searchConditions.push({ price: Number(q) });
//   }

//   const alllistings = await Listing.find({
//     $or: searchConditions,
//   });

//   res.render("listings/index.ejs", { alllistings });
// });

// //liked-listings
// router.post("/wishlist/toggle/:id", async (req, res) => {
//   // ❗ if not logged in
//   if (!req.user) {
//     return res.status(401).json({
//       success: false,
//       message: "You are not logged in",
//     });
//   }

//   const { id } = req.params;

//   const user = req.user;

//   const index = user.wishlist.indexOf(id);

//   let added = false;

//   if (index === -1) {
//     user.wishlist.push(id);
//     added = true;
//   } else {
//     user.wishlist.splice(index, 1);
//   }

//   await user.save();

//   res.json({ added });
// });

// // search suggestions
// router.get("/suggestions", async (req, res) => {
//   let { q } = req.query;

//   if (!q) return res.json([]);

//   const listings = await Listing.find({
//     $or: [
//       { title: { $regex: q, $options: "i" } },
//       { categories: { $regex: q, $options: "i" } },
//       { country: { $regex: q, $options: "i" } }, // ✅ ADD BACK COUNTRY
//     ],
//   }).limit(5);

//   let suggestions = [];

//   listings.forEach((listing) => {
//     if (listing.title) suggestions.push(listing.title);

//     if (listing.country) suggestions.push(listing.country); // ✅ ADD COUNTRY SAFELY

//     if (Array.isArray(listing.categories)) {
//       listing.categories.forEach((c) => suggestions.push(c));
//     }
//   });

//   // remove duplicates
//   suggestions = [...new Set(suggestions)];

//   // optional smart filter (recommended)
//   suggestions = suggestions.filter((item) =>
//     item.toLowerCase().includes(q.toLowerCase()),
//   );

//   res.json(suggestions.slice(0, 6)); // limit UI clutter
// });

// // WISHLIST PAGE
// router.get("/wishlist", isLoggedIn, async (req, res) => {
//   const user = await User.findById(req.user._id).populate("wishlist");

//   const alllistings = user.wishlist;

//   res.render("listings/wishlist.ejs", { alllistings });
// });

// router
//   .route("/:id")
//   .get(wrapAcync(listingController.showListing)) //show rout
//   .put(
//     isLoggedIn,
//     isOwner,
//     upload.single("listing[image]"),
//     validatelisting,
//     wrapAcync(listingController.updateListing),
//   ) //update/edit store thase db ma
//   .delete(isLoggedIn, isOwner, wrapAcync(listingController.deleteListing)); //delete

// //edit rout
// router.get(
//   "/:id/edit",
//   isLoggedIn,
//   isOwner,
//   wrapAcync(listingController.renderEditForm),
// );

// module.exports = router;

const express = require("express");
const router = express.Router();

const wrapAcync = require("../utility/wrapAcync.js");
const Listing = require("../models/listing.js");
const User = require("../models/user.js");

const { isLoggedIn, isOwner, validatelisting } = require("../middleware.js");
const listingController = require("../controller/listing.js");

const multer = require("multer");
const { storage } = require("../cloudConflig.js");

const upload = multer({ storage });

/* =========================
   INDEX + CREATE ROUTE
========================= */

router
  .route("/")
  .get(wrapAcync(listingController.index))

  .post(
    isLoggedIn,
    upload.array("listing[images]", 6),
    validatelisting,
    wrapAcync(listingController.createListing),
  );

/* =========================
   NEW FORM
========================= */

router.get("/new", isLoggedIn, listingController.renderNewForm);

/* =========================
   CATEGORY
========================= */

router.get("/category/:category", async (req, res) => {
  const { category } = req.params;

  const alllistings = await Listing.find({
    categories: category,
  });

  res.render("listings/index.ejs", { alllistings });
});

/* =========================
   SEARCH
========================= */

router.get("/search", async (req, res) => {
  let { q } = req.query;

  let searchConditions = [
    { location: { $regex: q, $options: "i" } },
    { country: { $regex: q, $options: "i" } },
    { title: { $regex: q, $options: "i" } },
    { categories: { $regex: q, $options: "i" } },
  ];

  if (!isNaN(q)) {
    searchConditions.push({ price: Number(q) });
  }

  const alllistings = await Listing.find({
    $or: searchConditions,
  });

  res.render("listings/index.ejs", { alllistings });
});

/* =========================
   WISHLIST TOGGLE
========================= */

router.post("/wishlist/toggle/:id", async (req, res) => {
  if (!req.user) {
    return res.status(401).json({
      success: false,
      message: "You are not logged in",
    });
  }

  const { id } = req.params;
  const user = req.user;

  const index = user.wishlist.indexOf(id);

  let added = false;

  if (index === -1) {
    user.wishlist.push(id);
    added = true;
  } else {
    user.wishlist.splice(index, 1);
  }

  await user.save();

  res.json({ added });
});

/* =========================
   SEARCH SUGGESTIONS
========================= */

router.get("/suggestions", async (req, res) => {
  let { q } = req.query;

  if (!q) return res.json([]);

  const listings = await Listing.find({
    $or: [
      { title: { $regex: q, $options: "i" } },
      { categories: { $regex: q, $options: "i" } },
      { country: { $regex: q, $options: "i" } },
    ],
  }).limit(5);

  let suggestions = [];

  listings.forEach((listing) => {
    if (listing.title) suggestions.push(listing.title);
    if (listing.country) suggestions.push(listing.country);

    if (Array.isArray(listing.categories)) {
      listing.categories.forEach((c) => suggestions.push(c));
    }
  });

  suggestions = [...new Set(suggestions)];

  suggestions = suggestions.filter((item) =>
    item.toLowerCase().includes(q.toLowerCase()),
  );

  res.json(suggestions.slice(0, 6));
});

/* =========================
   WISHLIST PAGE
========================= */

router.get("/wishlist", isLoggedIn, async (req, res) => {
  const user = await User.findById(req.user._id).populate("wishlist");

  res.render("listings/wishlist.ejs", {
    alllistings: user.wishlist,
  });
});

/* =========================
   SHOW / UPDATE / DELETE
========================= */

router
  .route("/:id")
  .get(wrapAcync(listingController.showListing))

  .put(
    isLoggedIn,
    isOwner,
    upload.single("listing[image]"),
    validatelisting,
    wrapAcync(listingController.updateListing),
  )

  .delete(isLoggedIn, isOwner, wrapAcync(listingController.deleteListing));

/* =========================
   EDIT FORM
========================= */

router.get(
  "/:id/edit",
  isLoggedIn,
  isOwner,
  wrapAcync(listingController.renderEditForm),
);

//booking reserve
router.post("/:id/book", isLoggedIn, async (req, res) => {
  let { id } = req.params;

  req.flash("success", "Booking request sent!");
  res.redirect(`/listings/${id}`);
});

module.exports = router;
