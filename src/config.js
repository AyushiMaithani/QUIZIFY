const mongoose = require("mongoose");
const connect = mongoose.connect("mongodb://127.0.0.1:27017/user");

connect
  .then(() => {
    console.log("database conected successfully ");
  })
  .catch(() => {
    console.log("database cannot be connected");
  });

//creating a schema
const loginSchema = new mongoose.Schema({
  fullname: {
    type: String,
    required: true,
  },
  username: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
  },
  highscore: {
    type: Number,
    default: 0,
  },
  lastscore: {
    type: Number,
    default: 0,
  },
});

module.exports = mongoose.model("users", loginSchema);
