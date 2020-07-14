const express = require("express");
const router = express.Router();
const db = require("../models");

router.post("/", (req, res) => {
  const comboName = req.body.comboName.trim();
  const comboString = req.body.comboString.trim();
  db.Combo.create({
   comboName,
   comboString
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

router.get(":id", (req, res) => {
  db.Combo.findOne({
    where: {
      id: req.params.id,
    },
  }).then((user) => res.json(user));
});

router.get("/comboName/:comboName", (req, res) => {
  db.User.findOne({
    where: {
      comboName: req.params.comboName,
    },
  }).then((user) => res.json(user));
});

router.put(":/id", (req, res) => {
  const updateCombo = {
    comboName: req.body.comboName,
    comboString: req.body.comboString
  };
  db.Combo.update(updateCombo, {
    where: {
      id: req.params.id,
    },
  }).then(() => {
    res.json(updatedCombo);
  });
});

router.delete(":/id", (req, res) => {
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
