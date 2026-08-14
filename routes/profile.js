const express = require("express");
const router = express.Router();

const profileController = require("../controller/profile.js");
const { isLoggedIn } = require("../middleware");

// PROFILE HOME (main page after clicking icon)
router.get("/", isLoggedIn, profileController.profilePage);

// MY LISTINGS (OWNER)
router.get("/my-listings", isLoggedIn, profileController.myListings);

// BOOKING REQUESTS (OWNER)
router.get("/booking-requests", isLoggedIn, profileController.bookingRequests);

// ✅ USER BOOKINGS (NEW)
router.get("/my-bookings", isLoggedIn, profileController.myBookings);

module.exports = router;
