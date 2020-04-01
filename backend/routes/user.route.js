const express = require("express");
const userRoutes = express.Router();
const jwt = require("jsonwebtoken");

let User = require("../models/User");

userRoutes.route("/profile/me").get(async (req, res) => {
  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.decode(token, { complete: true });
      const userId = decoded.payload.user.id;

      const user = await User.findOne({ _id: userId });

      res.status(200).json({
        name: `${user.first_name} ${user.last_name}`,
        username: user.username
      });
    }
  } catch (error) {
    res.status(500).json({
      message: error
    });
  }
});

module.exports = userRoutes;
