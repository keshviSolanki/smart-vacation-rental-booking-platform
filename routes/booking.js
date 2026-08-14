// const express = require("express");

// const router = express.Router();

// const bookingController = require("../controller/booking.js");

// const { isLoggedIn, validateBooking } = require("../middleware");

// // =========================
// // CREATE BOOKING
// // =========================

// router.post(
//   "/listings/:id/book",
//   isLoggedIn,
//   validateBooking,
//   bookingController.createBooking,
// );

// // =========================
// // MY BOOKINGS
// // =========================

// router.get("/bookings/my", isLoggedIn, bookingController.myBookings);

// // =========================
// // CANCEL BOOKING
// // =========================

// router.delete(
//   "/bookings/:bookingId",
//   isLoggedIn,
//   bookingController.cancelBooking,
// );

// module.exports = router;

const express = require("express");
const router = express.Router();

const bookingController = require("../controller/booking.js");
const { isLoggedIn } = require("../middleware");

// =========================
// CREATE BOOKING
// =========================
router.post("/:id/book", isLoggedIn, bookingController.createBooking);

// =========================
// MY BOOKINGS
// =========================
router.get("/my", isLoggedIn, bookingController.myBookings);

// =========================
// CANCEL BOOKING
// =========================
router.delete("/:bookingId", isLoggedIn, bookingController.cancelBooking);

// =========================
// UPDATE BOOKING STATUS (OWNER ACTION)
// =========================
router.patch(
  "/bookings/:id",
  isLoggedIn,
  bookingController.updateBookingStatus,
);

// ACCEPT BOOKING
router.patch("/:id/accept", isLoggedIn, bookingController.acceptBooking);

// REJECT BOOKING
router.patch("/:id/reject", isLoggedIn, bookingController.rejectBooking);

//booking reuest in owner page
router.get("/requests", isLoggedIn, async (req, res) => {
  // step 1: find all listings owned by current user
  const myListings = await Listing.find({ owner: req.user._id });

  const listingIds = myListings.map((l) => l._id);

  // step 2: find bookings for those listings
  const bookings = await Booking.find({ listing: { $in: listingIds } })
    .populate("listing")
    .populate("user");

  res.render("users/bookingRequests", { bookings });
});

//save booking data
router.post("/:id/book", isLoggedIn, async (req, res) => {
  try {
    console.log("BOOKING ROUTE HIT");

    let { id } = req.params;
    console.log("BODY:", req.body);

    const newBooking = new Booking({
      listing: id,
      user: req.user._id,
      checkIn: req.body.checkIn,
      checkOut: req.body.checkOut,
      guests: req.body.guests,
    });

    await newBooking.save();

    console.log("BOOKING SAVED");

    req.flash("success", "Booking request sent!");
    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.log("ERROR:", err);
    res.send("Booking failed");
  }
});
module.exports = router;
