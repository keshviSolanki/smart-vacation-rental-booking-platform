const cloudinary = require("cloudinary").v2;
const { CloudinaryStorage } = require("multer-storage-cloudinary");

cloudinary.config({
  cloud_name: process.env.CLOUD_NAME,
  api_key: process.env.CLOUD_API_KEY,
  api_secret: process.env.CLOUD_API_SECRET,
});

// console.log("CLOUD_NAME:", process.env.CLOUD_NAME);
// console.log("API_KEY:", process.env.CLOUD_API_KEY);
// console.log("API_SECRET:", process.env.CLOUD_API_SECRET);

const storage = new CloudinaryStorage({
  // cloudinary nu accound/motu-storage hve ama kya store karavano data ne te
  cloudinary: cloudinary,
  params: {
    folder: "wanderlust_DEV", /// cloudinary acc ma aa nam nu folder jma nichena 3 formet na data file store karavi saki
    allowed_formats: ["png", "jpg", "jpeg"], // supports promises as well
  },
});

module.exports = {
  cloudinary,
  storage,
};
