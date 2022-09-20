const mongoose = require("mongoose");

const cvSchema = mongoose.Schema({
  fileName: { type: String, required: true },
  filePath: { data: Buffer, contentType: String },
});

module.exports = mongoose.model("cv", cvSchema);
