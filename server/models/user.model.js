const mongoose = require("mongoose");

const UserShema = mongoose.Schema({
  _id: Number,
  login: String,
  password: String,
});

module.exports = mongoose.model("user", UserShema);
