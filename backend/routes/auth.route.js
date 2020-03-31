const express = require("express");
const argon2 = require("argon2");
const authRoutes = express.Router();
const jwt = require("jsonwebtoken");

let User = require("../models/User");

authRoutes.route("/sign-up").post(async (req, res) => {
  const body = req.body;
  try {
    body.password = await argon2.hash(body.password);
    const users = new User(body);
    users
      .save()
      .then(users => {
        res.status(200).json(users);
      })
      .catch(err => {
        res.status(400).send(err);
      });
  } catch (err) {
    res.status(400).send(err);
  }
});

authRoutes.route("/login").post(async (req, res) => {
  const body = req.body;
  const params = new User(body);
  const { username, password } = params;

  try {
    let user = await User.findOne({ username });
    if (!user)
      return res.status(400).json({
        message: "User Not Exist"
      });

    const isMatch = await argon2.verify(user.password, password);
    if (!isMatch)
      return res.status(400).json({
        message: "Incorrect Password !"
      });

    const payload = {
      user: {
        id: user.id
      }
    };

    jwt.sign(
      payload,
      process.env.REACT_APP_ACCESS_TOKEN,
      {
        expiresIn: 3600
      },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          token
        });
      }
    );
  } catch (error) {
    console.log(error);

    res.status(500).json({
      message: "Server Error"
    });
  }
});

module.exports = authRoutes;
