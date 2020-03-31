const express = require("express");
const userRoutes = express.Router();

let User = require("../models/User");

userRoutes.route("/profile/me").get((req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

module.exports = userRoutes;
