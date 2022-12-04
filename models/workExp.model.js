const mongoose = require("mongoose");

const WorkExpShema = mongoose.Schema({
  _id: Number,
  name: String,
  specialization: String,
  year: String,
  description: String,
});

module.exports = mongoose.model("workExp", WorkExpShema);