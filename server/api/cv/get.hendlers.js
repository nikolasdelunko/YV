const CvModel = require("../../models/cv.model");

exports.getCv = async (req, res) => {
  const cv = await CvModel.find().exec();
  if (!cv) {
    res.status(404).send(`Cv not found`).end();
  } else {
    res.send(cv).end();
  }
};
