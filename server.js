require("dotenv").config();
const express = require("express");
const path = require("path");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const UserController = require("./controllers/userController");
const GameController = require("./controllers/gameController");
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

db.sequelize.sync().then(function () {
  app.listen(PORT, () => {
    console.log(`App is running on http://localhost:${PORT}`);
  });
});
