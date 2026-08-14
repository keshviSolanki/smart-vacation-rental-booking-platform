const review = require("../models/review.js");
const Listing = require("../models/listing.js");

module.exports.createReview = async(req,res) => {

    let listing = await Listing.findById(req.params.id); //id access kri listing kyu chhe te
    let newreview = new review(req.body.review);// //review access kyru karan k aa badhu user a send kyru hse j db ma post request thi aavse
    newreview.author = req.user._id;
    //console.log(newreview);
    listing.reviews.push(newreview);

    await newreview.save();// new review database ma store thayo
    await listing.save(); // listing ma new j kai add karavi te store karavu pde
    req.flash("success", "New Review Created ! "); 
    res.redirect(`/listings/${listing._id}`);
};


module.exports.deleteReview = async(req,res) => {
    let {id, reviewid} = req.params;

    await Listing.findByIdAndUpdate(id, {$pull: {reviews: reviewid}}); // revies no array object mathi deelt krva
    await review.findByIdAndDelete(reviewid);
    req.flash("success",  " Review Deleted "); 
    res.redirect(`/listings/${id}`);
};