const mongoose = require("mongoose");

const ProjectShema = mongoose.Schema({
  _id: Number,
  name: String,
  description: String,
  photo: String,
  link: String,
});

module.exports = mongoose.model("project", ProjectShema);
