const { required } = require("joi");
const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const Schema = mongoose.Schema;
const passportLocalMongoose = require("passport-local-mongoose").default;

const userSchema = new Schema({
  // username passwordLocalMongoose jate j define kri dye chhe and salted + using hash fuction password bhi store karavi dye chhe
  email: {
    type: String,
    required: true,
  },
  wishlist: [
    {
      type: Schema.Types.ObjectId,
      ref: "Listing",
    },
  ],
});

//khali plugin krvathi thay jse upr kidhel badhu generate kri dese jate krvu na pde

userSchema.plugin(passportLocalMongoose);

module.exports = mongoose.model("User", userSchema);

//password same chhe k ny autantication jvu badhu jate kri lye jni diff method chhe -- check passport-local-mongoose webdite
