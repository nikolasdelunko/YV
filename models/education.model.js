const mongoose = require("mongoose");

const EducationShema = mongoose.Schema({
  _id: Number,
  name: String,
  specialization: String,
  link: String,
  year: String,
});

module.exports = mongoose.model("education", EducationShema);
