require("dotenv").config();
const path = require("path")
const express = require("express");
const db = require("./models");
const userController = require("./controllers/userController")
const gameController = require("./controllers/gameController")
const characterController = require("./controllers/characterController")
const comboController = require("./controllers/comboController")
const comboUserController = require("./controllers/comboUserController")
const PORT = process.env.PORT || 3001;
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

app.use("/api/user", userController)
app.use("/api/game", gameController)
app.use("/api/character", characterController)
app.use("/api/combo", comboController)
app.use("/api/comboUser", comboUserController)

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Express App is running on http://localhost:${PORT}`);
  });
});
