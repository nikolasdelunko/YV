const ImageModel = require("../../models/file.model");

exports.postUpload = async (req, res) => {
  if (!req.files) return res.status(200).send(`no file uploaded`);

  const file = req.files.file;

  if (!file) return res.status(404).send(`Incorrect input name`);

  const newFileName = encodeURI(file.name);
  const newType = file.data;

  file.mv(`../../../client/src/images/${newFileName}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      const newImage = new ImageModel({
        fileName: newFileName,
        filePath: newType,
      });
      newImage.save();
      res.send("successfully uploaded");
    }
  });
};
