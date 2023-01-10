const mongoose = require("mongoose");
const dotenv = require("dotenv").config();

mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("Database connected");
  })
  .catch((err) => {
    console.log(err);
    console.log("No connection with Database");
  });

module.exports = mongoose;
