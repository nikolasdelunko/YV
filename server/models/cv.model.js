const mongoose = require("mongoose");

const cvSchema = mongoose.Schema({
  _id: { type: Number },
  link: { type: String, required: true },
  date: { type: Date, default: Date.now },
});

module.exports = mongoose.model("cv", cvSchema);
