const express = require("express");
const router = express.Router();
const db = require("../models");
const { route } = require("./characterCombo");
const sequelize = require("sequelize")

router.get("/", (req, res) => {
    db.Character.findAll({
    }).then((character) => res.json(character));
  });



  router.get("/:id", (req, res) => {
    db.Character.findOne({
      where: {id: req.params.id}
    }).then((character) => res.json(character));
  });

  router.get("/gameselect/:GameId", (req, res) => {
    db.Character.findAll({
      where: {GameId: req.params.GameId}
    }).then((character) => res.json(character));
  });

// router.put(":/id", (req, res) => {
    
// })

module.exports = router;