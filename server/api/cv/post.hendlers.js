const CvModel = require("../../models/cv.model");
var fs = require("fs");

exports.postCv = async (req, res) => {
  const cv = await CvModel.find().exec();
  if (!req.files) return res.status(200).send(`no file uploaded`);

  const file = req.files.file;

  if (!file) return res.status(404).send(`Incorrect input name`);

  const newFileName = encodeURI(file.name);
  const newType = file.data;

  file.mv(`../client/src/files/${newFileName}`, (err) => {
    if (err) {
      return res.status(500).send(err);
    } else {
      const newCv = new CvModel({
        fileName: newFileName,
        filePath: newType,
      });
			// await MyText.findOneAndUpdate(req.params.id, newImage).exec();
      newCv.save();
      res.send("successfully uploaded");
    }
  });
  if (cv.length) {
    fs.unlink(`../client/src/images/${cv[0].fileName}`, function (err) {
      if (err) {
        return res.status(500).send(err);
      }
    });
  }
};

