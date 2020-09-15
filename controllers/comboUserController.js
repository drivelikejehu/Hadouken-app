const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");
const sequelize = require("sequelize")

router.post("/", (req, res) => {
  const newcomboUser = {
    comboId: req.body.comboId,
    userId: req.body.userId,
  };
  db.comboUser.create(newcomboUser)
    .then(() => {
      res.json([
        newcomboUser,
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
        message: "Failed to create comboUser.",
      });
    });
});

router.get("/userRecent", (req, res) => {
  db.Combo.findAll({
    where: {
      userId: req.params.userId
    },
    limit: 5,
    order: '"updatedAt" DESC'
  }).then((combo) => res.json(combo))
}) 

router.delete("/:comboId/:userId", (req, res) => {
  db.comboUser.destroy({
    where: {
        comboId: req.params.comboId,
      userId: req.params.userId,
    },
  })
    .then(() => {``
      res.json({
        success: true,
      });
    })
    .catch((err) => {
      console.log(err);
      res.status(500);
      res.json({
        success: false,
        message: "Failed to delete comboUser.",
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
