const mongoose = require("mongoose");

const ImageSchema = mongoose.Schema({
  fileName: {type: String, required: true},
  filePath: {data: Buffer, contentType: String},
});

module.exports = mongoose.model("imageModel", ImageSchema);
