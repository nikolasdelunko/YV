const CvModel = require("../../models/cv.model");

exports.deleteCv = async (req, res) => {
  const cv = await CvModel.find().exec();
  if (!cv) {
    res.status(404).send(`cv not found`).end();
  } else {
    await CvModel.findByIdAndDelete(cv.length > 1 ? cv[0]._id : null).exec();
    res.send(cv.length > 1 ? "Prev cv deleted" : "no cv found").end();
  }
};
