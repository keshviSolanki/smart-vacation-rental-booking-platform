const express = require("express");
const router = express.Router();

const axios = require("axios");

const Listing = require("../models/listing");

router.get("/:id", async (req, res) => {
  console.log("Weather Route Hit");
  try {
    const listing = await Listing.findById(req.params.id);

    const latitude = listing.geometry.coordinates[1];

    const longitude = listing.geometry.coordinates[0];

    const apiKey = process.env.WEATHER_API_KEY;

    const url = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

    const response = await axios.get(url);

    const weather = {
      temp: response.data.main.temp,
      humidity: response.data.main.humidity,
      description: response.data.weather[0].description,
      icon: response.data.weather[0].icon,
    };

    // SEND JSON
    res.json(weather);
  } catch (err) {
    console.log(err);

    res.status(500).json({
      error: "Weather not found",
    });
  }
});

module.exports = router;
