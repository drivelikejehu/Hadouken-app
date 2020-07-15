const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/", (req, res) => {
    db.Character.findAll({
    }).then((user) => res.json(user));
  });

  router.get("/characters/:id", (req, res) => {
    db.Character.findOne({
      where: req.params.id
    }).then((user) => res.json(user));
  });

// router.put(":/id", (req, res) => {
    
// })

module.exports = router;