const mongoose = require("mongoose");

const myTextShema = mongoose.Schema({
  text: String,
});

module.exports = mongoose.model("myText", myTextShema);
