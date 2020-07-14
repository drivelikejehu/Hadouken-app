const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/:id", (req, res) => {
    db.Character.findAll({
    }).then((user) => res.json(user));
  });
