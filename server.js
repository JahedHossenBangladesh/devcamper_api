const express = require("express");
const dotenv = require("dotenv");

dotenv.config({ path: "./config/config.env" });

const app = express();

app.get("/", (req, res) => {
  res.sendStatus = 200;
  res.json({
    name: "Jahed",
  });
});

const PORT = process.env.PORT || 5000;
app.listen(
  PORT,
  console.log(`port is in ${process.env.NODE_ENV} or in ${PORT}`)
);
