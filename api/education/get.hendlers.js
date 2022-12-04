const Education = require("../../models/education.model");

exports.getEducationById = async (req, res) => {
  const education = await Education.findById(req.params.id).exec();

  if (!education) {
    res.status(404).send(`user not found`).end();
  }

  res.send(education).end();
};

exports.getEducation = async (req, res) => {
  const education = await Education.find().exec();

  if (!education) {
    res.status(404).send(`user not found`).end();
  }

  res.send(education).end();
};
