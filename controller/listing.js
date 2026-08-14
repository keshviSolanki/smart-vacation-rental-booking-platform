// const Listing = require("../models/listing.js");

// module.exports.index = async (req, res) => {
//   const alllistings = await Listing.find({});
//   res.render("listings/index.ejs", { alllistings });
// };

// module.exports.renderNewForm = (req, res) => {
//   res.render("listings/new.ejs");
// };

// module.exports.showListing = async (req, res) => {
//   let { id } = req.params;
//   //replaces that ObjectId with the actual document. karan k document direct assess kri to te khali ana object/row ni id j store krel hoy atle populate use thay chhe
//   //{path: "reviews"} == listing ni andr badha reviews aavi jse and ani sathe sathe a listing na author pn aavi hse
//   const listing = await Listing.findById(id)
//     .populate({ path: "reviews", populate: { path: "author" } }) // aane nesting populate kevay k ak property to aavej ani anadr ni kaik property pn populate kri
//     .populate("owner");
//   if (!listing) {
//     req.flash("error", " Listing you requested for does not exist ! ");
//     return res.redirect("/listings");
//   }
//   console.log(listing);
//   res.render("listings/show.ejs", { listing });
//   //res.send("Show route working");
// };

// // module.exports.createListing = async (req, res) => {
// // validatlising upr defin kyru joi valu concept
// // if(!req.body.listing){//hopschot k semak thi diff method nakhi ne aa rout pr aavani try kre te mate
// //     throw new expressError(400, "send valid data for listing");
// // }
// //   let url = req.file.path;
// //   let filename = req.file.filename;
// //   const newlisting = new Listing(req.body.listing);
// // manually save geometry
// //   newlisting.geometry = {
// //     latitude: req.body.listing.geometry.latitude,
// //     longitude: req.body.listing.geometry.longitude,
// //   };
// //   newlisting.owner = req.user._id;
// //   newlisting.image = { url, filename }; // db ma save thse url and filename
// //hopscot k amathi jyare data nakhi tyare validation mate
// // aa sachi rit nthi atle joy namnu validation tool use kri lakhsu
// // if(! newlisting.title){
// //     throw new expressError(400, "title is missing");
// // }
// // if(! newlisting.description){
// //     throw new expressError(400, "discription is missing");
// // }
// // if(! newlisting.location){
// //     throw new expressError(400, "location is missing");
// // }
// //  if(! newlisting.price){
// //     throw new expressError(400, "price is missing");
// // }
// //  if(! newlisting.country){
// //     throw new expressError(400, "country is missing");
// // }
// //   await newlisting.save();
// //   req.flash("success", "New Listing Created ! "); // jvi new post create thse avo aa msg flash thavo joy
// //   res.redirect("/listings");
// // };

// module.exports.createListing = async (req, res) => {
//   try {
//     if (!req.file) {
//       req.flash("error", "Please upload image");
//       return res.redirect("/listings/new");
//     }

//     let url = req.file.path;
//     let filename = req.file.filename;

//     console.log("BODY:", req.body);
//     console.log("FILE:", req.file);

//     const newlisting = new Listing(req.body.listing);

//     // ✅ SIMPLE geometry (NO GeoJSON)
//     if (
//       req.body.listing.geometry &&
//       req.body.listing.geometry.latitude &&
//       req.body.listing.geometry.longitude
//     ) {
//       newlisting.geometry = {
//         latitude: Number(req.body.listing.geometry.latitude),
//         longitude: Number(req.body.listing.geometry.longitude),
//       };
//     }

//     newlisting.owner = req.user._id;
//     newlisting.image = { url, filename };

//     await newlisting.save();

//     console.log("saved successfully");

//     req.flash("success", "New Listing Created!");
//     res.redirect("/listings");
//   } catch (err) {
//     console.log("ERROR:", err);

//     req.flash("error", err.message || "Something went wrong");
//     res.redirect("/listings/new");
//   }
// };

// module.exports.renderEditForm = async (req, res) => {
//   let { id } = req.params;
//   const listing = await Listing.findById(id);
//   if (!listing) {
//     req.flash("error", "listing you requested for dose not exist");
//     res.redirect("/listings");
//   }

//   let newOrgImageUrl = listing.image.url.replace("/upload", "/upload/w_250"); // edit-form ma previe mate k kai img mukel chhe te mate thodik nani size ni image dekhase a mate replace use kyru
//   res.render("listings/edit.ejs", { listing, newOrgImageUrl });
// };

// module.exports.updateListing = async (req, res) => {
//   //  if(!req.body.listing){//hopschot k semak thi diff method nakhi ne aa rout pr aavani try kre te mate
//   //     throw new expressError(400, "send valid data for listing");
//   // }
//   let { id } = req.params;
//   let listing = await Listing.findByIdAndUpdate(id, { ...req.body.listing }); // aaya listing update thay to aavse img update ny thay
//   if (typeof req.file !== "undefined") {
//     // jo user ne image update krvi hse toj req ma file aavse toj aa kam krvanu
//     let url = req.file.path;
//     let filename = req.file.filename;
//     listing.image = { url, filename };
//     await listing.save();
//   }

//   req.flash("success", "Listing Updated ! ");
//   res.redirect(`/listings/${id}`);
// };

// module.exports.deleteListing = async (req, res) => {
//   let { id } = req.params;
//   await Listing.findByIdAndDelete(id);
//   req.flash("success", "Listing Deleted! ");
//   res.redirect("/listings");
// };

const Listing = require("../models/listing.js");

/* =========================
   INDEX
========================= */
module.exports.index = async (req, res) => {
  const alllistings = await Listing.find({});
  res.render("listings/index.ejs", { alllistings });
};

/* =========================
   NEW FORM
========================= */
module.exports.renderNewForm = (req, res) => {
  res.render("listings/new.ejs");
};

/* =========================
   SHOW LISTING
========================= */
module.exports.showListing = async (req, res) => {
  let { id } = req.params;

  const listing = await Listing.findById(id)
    .populate({ path: "reviews", populate: { path: "author" } })
    .populate("owner");

  if (!listing) {
    req.flash("error", "Listing not found!");
    return res.redirect("/listings");
  }

  res.render("listings/show.ejs", {
    listing,
    weather: null,
  });
};

/* =========================
   CREATE LISTING (FIXED)
========================= */
module.exports.createListing = async (req, res) => {
  try {
    // console.log("🔥 BODY:", req.body);
    // console.log("🔥 FILE:", req.file);

    // ❌ prevent crash
    if (!req.files || req.files.length === 0) {
      req.flash("error", "Please upload at least one image");
      return res.redirect("/listings/new");
    }

    const newlisting = new Listing(req.body.listing);

    // image from cloudinary
    newlisting.images = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));

    // geometry safety check
    // geometry FIX (IMPORTANT)
    if (
      req.body.listing.geometry &&
      req.body.listing.geometry.latitude &&
      req.body.listing.geometry.longitude
    ) {
      newlisting.geometry = {
        type: "Point",
        coordinates: [
          Number(req.body.listing.geometry.longitude),
          Number(req.body.listing.geometry.latitude),
        ],
      };
    }

    newlisting.owner = req.user._id;

    await newlisting.save();
    console.log("Listing created:", newlisting._id);

    console.log("✅ Listing saved successfully");

    req.flash("success", "New Listing Created!");
    res.redirect("/listings");
  } catch (err) {
    console.log("🔥 FULL ERROR:");
    console.log(err);

    console.log("🔥 STACK TRACE:");
    console.log(err.stack);

    console.log("🔥 REQUEST FILE:");
    console.log(req.file);

    console.log("🔥 REQUEST BODY:");
    console.log(req.body);

    req.flash("error", err.message || "Something went wrong");
    return res.redirect("/listings/new");
  }
};

/* =========================
   EDIT FORM
========================= */
module.exports.renderEditForm = async (req, res) => {
  let { id } = req.params;

  const listing = await Listing.findById(id);

  if (!listing) {
    req.flash("error", "Listing not found");
    return res.redirect("/listings");
  }

  let newOrgImageUrl =
    listing.images?.[0]?.url?.replace("/upload", "/upload/w_250") || "";

  res.render("listings/edit.ejs", { listing, newOrgImageUrl });
};

/* =========================
   UPDATE LISTING
========================= */
module.exports.updateListing = async (req, res) => {
  let { id } = req.params;

  let listing = await Listing.findByIdAndUpdate(
    id,
    { ...req.body.listing },
    { new: true },
  );

  // update image only if new file uploaded
  if (req.files && req.files.length > 0) {
    const newImages = req.files.map((file) => ({
      url: file.path,
      filename: file.filename,
    }));

    listing.images.push(...newImages);

    await listing.save();
  }

  req.flash("success", "Listing Updated!");
  res.redirect(`/listings/${id}`);
};

/* =========================
   DELETE LISTING
========================= */
module.exports.deleteListing = async (req, res) => {
  let { id } = req.params;

  await Listing.findByIdAndDelete(id);

  req.flash("success", "Listing Deleted!");
  res.redirect("/listings");
};
