const express = require("express");
const userRoutes = express.Router();
const jwt = require("jsonwebtoken");
require("../services");

let Post = require("../models/Post");
let User = require("../models/User");

userRoutes.route("/add_comment").post(async (req, res) => {
  const body = req.body;
  const posts = new Post(body);

  try {
    const authHeader = req.headers.authorization;
    if (authHeader) {
      const token = req.headers.authorization.split(" ")[1];
      const decoded = jwt.decode(token, { complete: true });
      const userId = decoded.payload.user.id;

      const author = await User.findOne({ _id: userId });
      posts.author = author.username;

      posts
        .save()
        .then((err, data) => {
          res.status(200).json(posts);
        })
        .catch(error => res.sendStatus(401).json({ message: "error" }));
    }
  } catch (error) {
    res.sendStatus(500).json({
      message: error
    });
  }
});

userRoutes.route("/").get(async (req, res) => {
  try {
    const posts = await Post.find({});
    res.status(200).json(posts);
  } catch (error) {
    res.sendStatus(500).json({
      message: error
    });
  }
});

module.exports = userRoutes;
