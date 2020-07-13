const express = require("express");
const router = express.Router();
const db = require("../models");

router.get("/:id", (req, res) => {
    db.Game.findAll({
    }).then((game) => res.json(game));
  });
  

  router.post("/", (req, res) => {
    const name = req.body.name;
    const genre = req.body.genre;
    db.Game.create({
   name,
   genre
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
  
//   router.put(":/id", (req, res) => {
//     const updateGame = {
      
//     };
//     db.User.update(updateGame, {
//       where: {
//         id: req.params.id,
//       },
//     }).then(() => {
//       res.json(updateGame);
//     });
//   });
  
//   router.delete(":/id", (req, res) => {
//     db.Game.destroy({
//       where: {
//         id: req.params.id,
//       },
//     }).then(() => {
//       res.json({
//         success: true,
//       });
//     });
//   });
  
  module.exports = router;
  