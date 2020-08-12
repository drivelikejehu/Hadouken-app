const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

router.post("/", (req, res) => {
  const newCharacterCombo = {
    gameId: req.body.gameId,
    userId: req.body.userId,
  };
  db.characterCombo.create(newCharacterCombo)
    .then(() => {
      res.json([
        newCharacterCombo,
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
        message: "Failed to create characterCombo.",
      });
    });
});

router.delete("/:characterId/:userId", (req, res) => {
  db.characterCombo.destroy({
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
        message: "Failed to delete character combo.",
      });
    });
});

//get all combos for a certain char
router.get("/characters/:id", (req, res) => {
  db.characterCombo.findAll({
    where: {
      comboId: req.params.id,
    },
    include: [
      {
        model: db.Character,
        attributes: ["characterName"],
      },
    ],
  })
    .then((result) => {
      res.json(result);
    })
    .catch((err) => {
      console.log(err);
      res.json(err);
    });
});


module.exports = router;
