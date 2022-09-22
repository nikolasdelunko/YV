const CvModel = require("../../models/cv.model");

exports.patchCv = async (req, res) => {
  const cv = await CvModel.find().exec();
  if (!cv) {
    res.status(404).send("link cv not found").end();
  } else {
    await CvModel.findByIdAndUpdate(req.params.id, req.body).exec();
    res.send("cv updated successfully");
  }
};


// https://drive.google.com/file/d/1hpWK3nrI9KZjoeHhwR1mDeEy7nbgXOlV/view?usp=sharing