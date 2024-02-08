const express = require("express");
const app = express();
const cors = require("cors");
const statesRouter = require("./routes/states");
const PORT = process.env.PORT || 3000;

app.use(express.json());
app.use(cors());

app.use("/api", statesRouter);

app.listen(PORT, (error) => {
  if (error) {
    console.log(error);
  }
  console.log(`server is running on port ${PORT}`);
});
