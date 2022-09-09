const mongoose = require("mongoose");

const SkillsShema = mongoose.Schema({
  skill: String,
});

module.exports = mongoose.model("skills", SkillsShema);
