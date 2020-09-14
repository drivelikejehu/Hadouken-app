const express = require("express");
const router = express.Router();
const db = require("../models");
const sequelize = require("sequelize");

router.post("/", (req, res) => {
  const firstName = req.body.firstName ? req.body.firstName.trim() : "";
  const lastName = req.body.lastName ? req.body.lastName.trim() : "";
  const email = req.body.email ? req.body.email.trim() : "";
  const password = req.body.password ? req.body.password.trim() : "";
  const username = req.body.username ? req.body.username.trim() : "";

  if (firstName && lastName && email && password && username) {
    db.User.create({
      firstName,
      lastName,
      email,
      password,
      username,
    })
    .then((result) => {
      console.log(result);
      res.json({
        success: true,
        message: "Successfully created new user.",
        data: result,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "Failed to create new user.",
      });
    });
  } else {
    res.status(500).json({
        success: false,
        message: "Please enter all criteria",
      });
  }
});

// purely for testing
router.get("/", (req, res) => {
  db.User.findAll({}).then((user) => res.json(user));
});
// purely for testing

router.get("/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => res.json(user));
});

router.get("/username/:username", (req, res) => {
  db.User.findOne({
    where: {
      username: req.params.username,
    },
  }).then((user) => res.json(user));
});

router.put("/:id", (req, res) => {
  const updateUser = {
    username: req.body.username,
    birthday: req.body.birthday,
    picURl: req.body.picURl,
  };
  db.User.update(updateUser, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.json(updatedUser);
  });
});

router.delete(":/id", (req, res) => {
  db.User.destroy({
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.json({
      success: true,
    });
  });
});

module.exports = router;
