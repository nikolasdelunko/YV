const CvModel = require("../../models/cv.model");

exports.deleteCv = async (req, res) => {
  const cv = await CvModel.find().exec();
  if (!cv) {
    res.status(404).send(`soft skill not found`).end();
  } else {
    const lastCv = cv[0];
    await CvModel.findByIdAndDelete(cv.length ? lastCv._id : null).exec();
    res.send(cv.length ? `last СV skill deleted` : `no CV`).end();
  }
};
