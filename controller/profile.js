const Listing = require("../models/listing");
const Booking = require("../models/booking");

// PROFILE PAGE
module.exports.profilePage = (req, res) => {
  res.render("users/profile");
};

// MY LISTINGS (OWNER)
module.exports.myListings = async (req, res) => {
  const listings = await Listing.find({ owner: req.user._id });
  res.render("users/myListings", { listings });
};

// BOOKING REQUESTS (OWNER SIDE)
module.exports.bookingRequests = async (req, res) => {
  const bookings = await Booking.find().populate("listing").populate("user");

  const ownerBookings = bookings.filter(
    (b) => b.listing.owner.toString() === req.user._id.toString(),
  );

  res.render("users/bookingRequests", { bookings: ownerBookings });
};

//my booking
module.exports.myBookings = async (req, res) => {
  let status = req.query.status || "all";

  let filter = { user: req.user._id };

  if (status !== "all") {
    filter.status = status;
  }

  let bookings = await Booking.find(filter).populate("listing");

  res.render("booking/myBooking", {
    bookings,
    activeStatus: status, // ✅ IMPORTANT FIX
  });
};
