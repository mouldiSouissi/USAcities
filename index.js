const express = require("express");
const app = express();
const PORT = process.env.PORT || 3001;
const cors = require("cors");
const cities = require("./db/cities");

app.use(express.json());
app.use(cors());

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
