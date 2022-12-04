const Education = require("../../models/education.model");

exports.deleteEducationById = async (req, res) => {
  const education = await Education.find().exec();
  if (!education) {
    res.status(404).send(`education not found`).end();
  } else {
    await Education.findByIdAndDelete(req.params.id).exec();
    res.send(`Education with id  ${req.params.id} deleted`).end();
  }
};

exports.deleteEducation = async (req, res) => {
  const education = await Education.find().exec();
  if (!education) {
    res.status(404).send(`education not found`).end();
  } else {
    const lastEdu = education.slice(-1);
    await Education.findByIdAndDelete(
      lastEdu.length ? lastEdu[0]._id : null
    ).exec();
    res
      .send(lastEdu.length ? "Last education deleted" : "no education found")
      .end();
  }
};
