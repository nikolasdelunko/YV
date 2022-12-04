const mongoose = require("mongoose");

const ContactsShema = mongoose.Schema({
  email: String,
  phone: String,
});

module.exports = mongoose.model("contacts", ContactsShema);
