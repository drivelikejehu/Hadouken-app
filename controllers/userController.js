const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const firstName = req.body.firstName.trim();
  const lastName = req.body.lastName.trim();
  const email = req.body.email.trim();
  const password = req.body.password.trim();
  const username = req.body.username.trim();
  db.User.create({
    firstName,
    lastName,
    email,
    password,
    username,
  })
    .then(() => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
    });
});

// purely for testing
router.get("/", (req, res) => {
  db.User.findAll({
}).then((user) => res.json(user));
})
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
      id: req.params.id
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
