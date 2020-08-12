const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

router.post("/", (req, res) => {
  const newUserCharacter = {
    characterId: req.body.characterId,
    userId: req.body.userId,
  };
  db.UserCharacter.create(newUserCharacter)
    .then(() => {
      res.json([
        newUserCharacter,
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
        message: "Failed to create UserCharacter.",
      });
    });
});

router.delete("/:characterId/:userId", (req, res) => {
  db.UserCharacter.destroy({
    where: {
        characterId: req.params.characterId,
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
        message: "Failed to delete UserCharacter.",
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
