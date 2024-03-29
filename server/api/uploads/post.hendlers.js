const ImageModel = require("../../models/file.model");
var fs = require("fs");

exports.postUpload = async (req, res) => {
  const images = await ImageModel.find().exec();
  if (!req.files) return res.status(200).send(`no file uploaded`);

  const file = req.files.file;

  if (!file) return res.status(404).send(`Incorrect input name`);

  const newFileName = encodeURI(file.name);
  const newType = file.data;

  file.mv(`../client/src/images/${newFileName}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      const newImage = new ImageModel({
        fileName: newFileName,
        filePath: newType,
      });
			// await MyText.findOneAndUpdate(req.params.id, newImage).exec();
      newImage.save();
      res.send("successfully uploaded");
    }
  });
  if (images.length) {
    fs.unlink(`../client/src/images/${images[0].fileName}`, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
  }
};

