const express = require("express");
const router = express.Router();
const db = require("../models");
const sequelize = require("sequelize")
const { route } = require("./userController");

router.post("/", (req, res) => {
  const comboName = req.body.comboName.trim();
  const comboString = req.body.comboString.trim();
  db.Combo.create({
    comboName,
    comboString,
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
// Temporary recent route until User Auth is done
router.get("/recent", (req, res) => {
  db.Combo.findAll({
    order: sequelize.literal('id DESC'),
  }).then((combo) => res.json(combo))
}) 

router.get("/:id", (req, res) => {
  db.Combo.findOne({
    where: {
      id: req.params.id,
    },
  }).then((combo) => res.json(combo));
});

router.get("/character/:CharacterID", (req, res) => {
  db.Combo.findAll({
    where: {
      CharacterID: req.params.id,
    },
  }).then((combo) => res.json(combo));
});

router.get("/comboName/:comboName", (req, res) => {
  db.Combo.findOne({
    where: {
      comboName: req.params.comboName,
    },
  }).then((combo) => res.json(combo));
});
// Will eventually not need this route, but it's a placeholder until the 
// ability to maintain the user/character is passed from page to page.
router.get("/", (req, res) => {
  db.Combo.findAll({}).then((combo) => res.json(combo));
});

router.put(":/id", (req, res) => {
  const updateCombo = {
    comboName: req.body.comboName,
    comboString: req.body.comboString,
  };
  db.Combo.update(updateCombo, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.json(updatedCombo);
  });
});

router.delete("/:id", (req, res) => {
  db.Combo.destroy({
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
