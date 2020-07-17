const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/", (req, res) => {
    db.Character.findAll({
    }).then((user) => res.json(user));
  });

  router.get("/select/:id", (req, res) => {
    db.Character.findOne({
      where: req.params.id
    }).then((result) => res.json(result));
  });

  router.get("/gameselect/:gameid", (req, res) => {
    db.Character.findAll({
      where: req.params.gameid
    }).then((result) => res.json(result));
  });

// router.put(":/id", (req, res) => {
    
// })

module.exports = router;