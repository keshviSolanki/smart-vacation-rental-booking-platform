const Listing = require("../models/listing");
const Booking = require("../models/booking");
const ExpressError = require("../utility/expressError.js");

module.exports.createBooking = async (req, res) => {
  try {
    const { id } = req.params;

    const { checkIn, checkOut } = req.body;

    const listing = await Listing.findById(id);

    // =========================
    // PREVENT OWNER BOOKING
    // =========================

    if (listing.owner.equals(req.user._id)) {
      req.flash("error", "You cannot book your own listing");

      return res.redirect(`/listings/${id}`);
    }

    // =========================
    // DATE VALIDATION
    // =========================

    const today = new Date();

    today.setHours(0, 0, 0, 0);

    const start = new Date(checkIn);

    const end = new Date(checkOut);

    // prevent past dates

    if (start < today) {
      req.flash("error", "Past dates not allowed");

      return res.redirect(`/listings/${id}`);
    }

    // prevent invalid checkout

    if (end <= start) {
      req.flash("error", "Check-out must be after check-in");

      return res.redirect(`/listings/${id}`);
    }

    // =========================
    // OVERLAP CHECK
    // =========================

    const existingBooking = await Booking.findOne({
      listing: id,

      checkIn: {
        $lt: checkOut,
      },

      checkOut: {
        $gt: checkIn,
      },
    });

    if (existingBooking) {
      req.flash("error", "These dates are already booked");

      return res.redirect(`/listings/${id}`);
    }

    // =========================
    // PRICE CALCULATION
    // =========================

    const oneDay = 1000 * 60 * 60 * 24;

    const totalDays = Math.ceil((end - start) / oneDay);

    const totalPrice = totalDays * listing.price;

    // =========================
    // CREATE BOOKING
    // =========================

    const newBooking = new Booking({
      listing: listing._id,

      user: req.user._id,

      checkIn,

      checkOut,

      totalPrice,

      status: "pending",

      guests: req.body.guests,
    });

    console.log("NEW BOOKING:", newBooking);

    await newBooking.save();

    console.log("BOOKING SAVED SUCCESSFULLY");

    req.flash("success", "Booking Successful!");

    res.redirect(`/listings/${id}`);
  } catch (err) {
    console.log(err);

    req.flash("error", "Booking failed");

    res.redirect("/listings");
  }
};

// =========================
// CANCLE BOOKING
// =========================

module.exports.cancelBooking = async (req, res) => {
  const { bookingId } = req.params;

  const booking = await Booking.findById(bookingId);

  if (!booking) {
    req.flash("error", "Booking not found");
    return res.redirect("/bookings/my");
  }

  // Only user can cancel their own booking
  if (!booking.user.equals(req.user._id)) {
    req.flash("error", "Unauthorized action");
    return res.redirect("/bookings/my");
  }

  booking.status = "cancelled";
  await booking.save();

  req.flash("success", "Booking cancelled successfully");
  res.redirect("/bookings/my");
};

// =========================
// MY BOOKING
// =========================

module.exports.myBookings = async (req, res) => {
  let { status } = req.query;

  // allow only valid statuses
  const allowedStatus = [
    "all",
    "pending",
    "confirmed",
    "cancelled",
    "completed",
  ];

  if (!status || !allowedStatus.includes(status)) {
    status = "all";
  }

  // build filter
  let filter = {
    user: req.user._id,
  };

  if (status !== "all") {
    filter.status = status;
  }

  const bookings = await Booking.find(filter)
    .populate("listing")
    .sort({ createdAt: -1 }); // newest first

  res.render("booking/myBooking", {
    bookings,
    activeStatus: status,
  });
};

// =========================
// UPDATE BOOKING STATUS
// =========================
module.exports.updateBookingStatus = async (req, res) => {
  const { id } = req.params;
  const { status } = req.body;

  const booking = await Booking.findById(id).populate("listing");

  if (!booking) {
    req.flash("error", "Booking not found");
    return res.redirect("/profile/booking-requests");
  }

  // Only owner of listing can update booking
  if (!booking.listing.owner.equals(req.user._id)) {
    req.flash("error", "Unauthorized action");
    return res.redirect("/profile/booking-requests");
  }

  // Update status
  booking.status = status;
  await booking.save();

  req.flash("success", `Booking ${status} successfully`);
  res.redirect("/profile/booking-requests");
};

// ACCEPT BOOKING
module.exports.acceptBooking = async (req, res) => {
  let { id } = req.params;

  let booking = await Booking.findById(id).populate("listing");

  // ONLY OWNER CAN ACCEPT
  if (!booking.listing.owner.equals(req.user._id)) {
    req.flash("error", "You are not allowed");
    return res.redirect("/profile/booking-requests");
  }

  booking.status = "confirmed";
  await booking.save();

  req.flash("success", "Booking accepted");
  res.redirect("/profile/booking-requests");
};

// REJECT BOOKING
module.exports.rejectBooking = async (req, res) => {
  let { id } = req.params;

  let booking = await Booking.findById(id).populate("listing");

  if (!booking.listing.owner.equals(req.user._id)) {
    req.flash("error", "You are not allowed");
    return res.redirect("/profile/booking-requests");
  }

  booking.status = "cancelled";
  await booking.save();

  req.flash("success", "Booking rejected");
  res.redirect("/profile/booking-requests");
};
