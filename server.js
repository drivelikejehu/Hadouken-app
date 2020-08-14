require("dotenv").config();
const path = require("path");
const express = require("express");
const db = require("./models");
// const userController = require("./controllers/userController");
// const gameController = require("./controllers/gameController");
// const characterController = require("./controllers/characterController");
// const comboController = require("./controllers/comboController");
// const comboUserController = require("./controllers/comboUserController");
const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.get("/api/config", (req, res) => {
  res.json({
    success: true,
    currentPort: PORT,
  });
});

const users = [
  {
    id: "1",
    email: "john@gmail.com",
    password: "password",
  },
  {
    id: "2",
    email: "bob@gmail.com",
    password: "password",
  },
  {
    id: "3",
    email: "bacon@gmail.com",
    password: "password",
  },
];

app.post("/api/users", (req, res) => {
  const {email, password} = req.body;
  // db.User.findOne({email: email})
  const foundUserArray = users.filter((user) => user.email === email);
  console.log(foundUserArray);
  if (foundUserArray.length > 0) {
    const userToAuthenticate = foundUserArray[0];
    // res.json(foundUserArray[0]);
    if (userToAuthenticate.password === password) {
      res.json({
        success: true,
        message: "We found a user",
        //TODO: Convert data here to a JWT for future authentication
        data: userToAuthenticate,
      });
    } else {
      res.status(403);
      res.json({
        success: false,
        message: "Invalid username or password",
        data: null,
      });
    }
    // res.json(userToAuthenticate);
  } else {
    res.status(400);
    res.json({
      success: false,
      message: "Invalid username or password",
      data: null,
    });
  }
});

// app.use("/api/user", userController);
// app.use("/api/game", gameController);
// app.use("/api/character", characterController);
// app.use("/api/combo", comboController);
// app.use("/api/comboUser", comboUserController);

app.use(express.static("client/build"));

app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname, "/client/build/index.html"));
});

db.sequelize.sync().then(() => {
  app.listen(PORT, () => {
    console.log(`Express App is running on http://localhost:${PORT}`);
  });
});
