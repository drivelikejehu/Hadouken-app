require("dotenv").config();
const path = require("path")
const express = require("express");
<<<<<<< HEAD

=======
>>>>>>> ccff48442e0ffeef65d0c7279ba355e4b41a9682
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
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
