require("dotenv").config();
const express = require("express");
const cors = require("cors");
const app = express();
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const config = require("./backend/config/database");

mongoose.Promise = global.Promise;
mongoose.connect(config.db, { useNewUrlParser: true }).then(
  () => {
    console.log("Database is connected");
  },
  err => {
    console.log("Can not connect to the database" + err);
  }
);

app.use(cors());
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));
require("./backend/routes/api")(app);

app.listen(process.env.REACT_APP_PORT, function() {
  console.log("Server is running on Port:", process.env.REACT_APP_PORT);
});
