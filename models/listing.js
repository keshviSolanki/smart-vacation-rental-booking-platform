const mongoose = require("mongoose");
const review = require("./review.js");
const Schema = mongoose.Schema;

const listingSchema = new Schema({
  title: {
    type: String,
    required: true,
  },
  description: String,
  images: [
    {
      url: String,
      filename: String,
    },
  ],
  price: Number,
  location: String,
  country: String,
  //
  categories: {
    type: String,
    enum: [
      "trending",
      "rooms",
      "doms",
      "iconic-cities",
      "boats",
      "pools",
      "mountains",
      "castles",
      "camping",
      "farms",
      "snow",
    ],
  },
  //
  reviews: [
    {
      type: Schema.Types.ObjectId, //id store karayvi
      ref: "review",
    },
  ],
  owner: {
    type: Schema.Types.ObjectId,
    ref: "User",
  },
  geometry: {
    type: {
      type: String,
      enum: ["Point"],
      required: true,
    },
    coordinates: {
      type: [Number],
      required: true,
    },
  },
});

//aa mongoose nu midlware chhe - listing delet krsu sathe sathe tena reviews pn delet thay jse
listingSchema.post("findOneAndDelete", async (listing) => {
  if (listing) {
    await review.deleteMany({ _id: { $in: listing.reviews } }); // listing na reviews vala arraay ma jtala revie hse te delete thse id atle e perticular listing ni id
  }
});

//listing nam nu table rady kyru
const Listing = mongoose.model("Listing", listingSchema);
module.exports = Listing;
