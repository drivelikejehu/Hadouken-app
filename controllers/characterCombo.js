const express = require("express");
const router = express.Router();
const db = require("../models");
const { Op } = require("sequelize");

router.post("/", (req, res) => {
  const newCharacterCombo = {
    comboId: req.body.comboId,
    characterId: req.body.characterId,
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

  router.put(":/id", (req, res) => {
    const updateCharCom = {
      
    };
    db.characterCombo.update(updateCharCom, {
      where: {
        id: req.params.id,
      },
    }).then(() => {
      res.json(charCom);
    });
  });

router.delete("/:characterId/:comboId", (req, res) => {
  db.characterCombo.destroy({
    where: {
      characterId: req.params.characterId,
      comboId: req.params.comboId,
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
      characterId: req.params.id,
    },
    include: [
      {
        model: db.Combo,
        attributes: ["comboName","comboString"],
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
