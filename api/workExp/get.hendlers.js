const WorkExp = require("../../models/workExp.model");

exports.getWorkExpById = async (req, res) => {
  const workExp = await WorkExp.findById(req.params.id).exec();
  if (!workExp) {
    res.status(404).send(`WorkExp not found`).end();
  } else {
    res.send(workExp).end();
  }
};

exports.getWorkExp = async (req, res) => {
  const work = await WorkExp.find().exec();

  if (!work) {
    res.status(404).send(`Work not found`).end();
  } else {
    res.send(work).end();
  }
};
