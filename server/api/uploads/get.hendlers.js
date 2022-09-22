const ImageModel = require("../../models/file.model");

exports.getUpload = async (req, res) => {
  const imageModel = await ImageModel.find().exec();
  if (!imageModel) {
    res.status(404).send(`Image not found`).end();
  } else {
    res.send(imageModel).end();
  }
};
