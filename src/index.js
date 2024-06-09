const express = require("express");
const path = require("path");
const bcrypt = require("bcrypt");
const userModel = require("./config");


const app = express();

//use ejs as view engine
app.set("view engine", "ejs");
//adds public automatically while linking css file
app.use(express.static("public"));

//base route
app.get("/", (req, res) => {
  res.render("login");
});

app.get("/signup", (req, res) => {
  res.render("signup");
});

const port = 5000;
app.listen(port, () => {
  console.log(`Server running on port: ${port}`);
});
