const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

router.post("/", (req, res) => {
  const newUserCombo = {
    comboId: req.body.comboId,
    userId: req.body.userId,
  };
  db.UserCombo.create(newUserCombo)
    .then(() => {
      res.json([
        newUserCombo,
        {
          success: true,
        },
      ]);
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "Failed to create UserCombo.",
      });
    });
});

router.delete("/:comboId/:userId", (req, res) => {
  db.UserCombo.destroy({
    where: {
        comboId: req.params.comboId,
      userId: req.params.userId,
    },
  })
    .then(() => {
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "Failed to delete UserCombo.",
      });
    });
});

//get all user combos route
router.get("/:id", (req, res) => {
  db.User.findOne({
    where: {
      id: req.params.id,
    },
    include: [
      {
        model: db.Combo,
        attributes: ["id", "comboName", "comboString"],
      },
    ],
  })
    .then((result) => {
      res.json(result.Combos);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});

module.exports = router;
