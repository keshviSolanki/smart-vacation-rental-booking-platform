const express = require("express");
const router = express.Router({ mergeParams: true }); // mergeperams atle perent ma kaik request ka to user no data aavi hoy te child ma assess krva
const wrapAcync = require("../utility/wrapAcync.js");
const {
  validatereview,
  isLoggedIn,
  isRevieAuthor,
} = require("../middleware.js");
const reviewController = require("../controller/review.js");

//revies
router.post(
  "/",
  isLoggedIn,
  validatereview,
  wrapAcync(reviewController.createReview),
);

//delete a revie
router.delete(
  "/:reviewid",
  isLoggedIn,
  isRevieAuthor,
  wrapAcync(reviewController.deleteReview),
);

module.exports = router;
