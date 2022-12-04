const mongoose = require("mongoose");

const CertificatesShema = mongoose.Schema({
  title: String,
  link: String,
});

module.exports = mongoose.model("certificates", CertificatesShema);
