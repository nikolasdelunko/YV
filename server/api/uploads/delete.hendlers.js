const ImageModel = require("../../models/file.model");

exports.deleteUpload = async (req, res) => {
  const images = await ImageModel.find().exec();
  if (!images) {
    res.status(404).send(`image not found`).end();
  } else {
    await ImageModel.findByIdAndDelete(images.length > 1 ? images[0]._id : null).exec();
    res
      .send(images.length > 1 ? "Last project deleted" : "no project found")
      .end();
  }
};
