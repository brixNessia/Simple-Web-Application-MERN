const express = require("express");
const argon2 = require("argon2");
const usersRoutes = express.Router();

// const userMiddleware = require("../service/user.service");

// Require Business model in our routes module
let User = require("../models/User");

// Defined store route
usersRoutes.route("/add").post(async (req, res) => {
  const body = req.body;
  try {
    body.user_password = await argon2.hash(body.user_password);
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

// usersRoutes.route("/login").post(async (req, res) => {
//   try {
//     if (await argon2.verify("<big long hash>", "password")) {
//       // password match
//     } else {
//       // password did not match
//     }
//   } catch (err) {
//     // internal failure
//   }
// });

// Defined get data(index or listing) route
usersRoutes.route("/").get((req, res) => {
  User.find((err, users) => {
    if (err) {
      console.log(err);
    } else {
      res.json(users);
    }
  });
});

// Defined edit route
usersRoutes.route("/edit/:id").get((req, res) => {
  let id = req.params.id;
  User.findById(id, (err, users) => {
    res.json(users);
  });
});

//  Defined update route
usersRoutes.route("/update/:id").post((req, res) => {
  User.findById(req.params.id, (err, users) => {
    if (!users) res.status(404).send("data is not found");
    else {
      users.person_name = req.body.person_name;
      users.user_email = req.body.user_email;
      users.user_password = req.body.user_password;

      users
        .save()
        .then(users => {
          res.json("Update complete");
        })
        .catch(err => {
          res.status(400).send("unable to update the database");
        });
    }
  });
});

// Defined delete | remove | destroy route
usersRoutes.route("/delete/:id").get((req, res) => {
  User.findByIdAndRemove({ _id: req.params.id }, (err, users) => {
    if (err) res.json(err);
    else res.json("Successfully removed");
  });
});

module.exports = usersRoutes;
