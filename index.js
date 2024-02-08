const express = require("express");
const app = express();
const PORT = process.env.PORT || 3000;
const cors = require("cors");
const cities = require("./db/cities");
const states = require("./db/states");

app.use(express.json());
app.use(cors());

app.get("/", (req, res) => {
  try {
    res.send(`<h1>USA states and cities API</h1>`);
  } catch (error) {
    console.log(error);
  }
});
app.get("/states", (req, res) => {
  try {
    res.send(states);
  } catch (error) {
    console.log(error);
  }
});
app.get("/cities/:state", (req, res) => {
  try {
    const filtered = cities.filter((row) => row.state === req.params.state);
    res.send(filtered);
  } catch (error) {
    console.log(error);
  }
});

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`server is running on port ${PORT}`);
});
