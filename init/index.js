const mongoose = require("mongoose");
const dns = require("dns");
dns.setServers(["8.8.8.8", "8.8.4.4"]);

const dotenv = require("dotenv");

dotenv.config({
  path: require("path").join(__dirname, "../.env"),
});

const Listing = require("../models/listing.js");
const initData = require("./data.js");

const MONGO_URL = process.env.MONGO_URL;

async function initDB() {
  try {
    await mongoose.connect(MONGO_URL);
    console.log("Connected to MongoDB");

    await Listing.insertMany(initData.data);

    console.log("25 sample listings inserted successfully!");
  } catch (err) {
    console.log("Database seeding error:", err);
  } finally {
    await mongoose.connection.close();
  }
}

initDB();
