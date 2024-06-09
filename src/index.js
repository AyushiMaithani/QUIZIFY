const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const userModel = require("./config");

const app = express();
//convert data into json format
app.use(express.json());

app.use(express.urlencoded({ extended: false }));

//use ejs as view engine
app.set("view engine", "ejs");
//adds public automatically while linking css file(static file)
app.use(express.static("public"));

//base route
app.get("/", (req, res) => {
  res.render("signup");
});

app.get("/login", (req, res) => {
  res.render("login");
});

app.post("/", async (req, res) => {
  const data = {
    fullname: req.body.fullname,
    username: req.body.username,
    email: req.body.email,
    password: req.body.password,
  };

  //check if user already exists
  const existingUser = await userModel.findOne({ username: data.username });
  if (existingUser) {
    res.send("user already exists.Please choose a different username ");
  } else {
    const userData = await userModel.insertMany(data);
    console.log(userData);
  }
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
