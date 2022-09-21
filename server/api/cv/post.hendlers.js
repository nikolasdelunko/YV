const CvModel = require("../../models/cv.model");

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};

exports.postCv = async (req, res) => {
  const cv = await CvModel.find().exec();
  if (!cv) {
    res.status(404).send(`CV not found`).end();
  } else if (
    req.body.link === undefined ||
    req.body.link === null ||
    req.body.link.length < 3 ||
    req.body.link.trim() === ""
  ) {
    res.send("please add link to you cv").end();
  } else {
    const newCv = new CvModel(req.body);
		newCv._id = generateId(cv);
    await newCv.save();
    res.send(` you succes added  new CV`).end();
  }
};
