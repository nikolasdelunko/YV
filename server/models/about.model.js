const mongoose = require("mongoose");

const AboutShema = mongoose.Schema({
  skill: String,
});

module.exports = mongoose.model("About", AboutShema);
