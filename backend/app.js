const express = require("express");
const app = express();
const dotenv = require("dotenv").config();
const Port = process.env.PORT;
const cors = require("cors");
const { default: mongoose } = require("mongoose");
app.use(cors({ origin: ["http://localhost:3000"] }));

//middleware

//DB connection
mongoose.set("strictQuery", false);
mongoose
  .connect(process.env.DB_URL)
  .then(() => {
    console.log("DB Connected");
  })
  .catch((err) => {});
app.use(express.json());
app.listen(Port, () => {
  console.log(`Server is running at port ${Port}`);
});
