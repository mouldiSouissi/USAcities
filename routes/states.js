const express = require("express");
const router = express.Router();
const states = require("../db/states");
const cities = require("../db/cities");

router.get("/states", (req, res) => {
  try {
    res.send(states);
  } catch (error) {
    console.log(error);
  }
});

router.get("/cities/:state", (req, res) => {
  try {
    const filtered = cities.filter((row) => row.state === req.params.state);
    res.send(filtered);
  } catch (error) {
    console.log(error);
  }
});

module.exports = router;
