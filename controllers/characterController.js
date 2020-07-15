const express = require("express");
const router = express.Router();
const db = require("../models");


router.get("/", (req, res) => {
    db.Character.findAll({
    }).then((user) => res.json(user));
  });

  router.get("/", (req, res) => {
    db.Character.findOne({
    }).then((user) => res.json(user));
  });