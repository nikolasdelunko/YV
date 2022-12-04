const WorkExp = require("../../models/workExp.model");

exports.deleteWorkExpById = async (req, res) => {
  const workExp = await WorkExp.find().exec();
  if (!workExp) {
    res.status(404).send(`education not found`).end();
  } else {
    await WorkExp.findByIdAndDelete(req.params.id).exec();
    res.send(`work with id  ${req.params.id} deleted`).end();
  }
};

exports.deleteWorkExp = async (req, res) => {
  const workExp = await WorkExp.find().exec();
  if (!workExp) {
    res.status(404).send(`education not found`).end();
  } else {
    const lastWorkExp = workExp.slice(-1);
    await WorkExp.findByIdAndDelete(
      lastWorkExp.length ? lastWorkExp[0]._id : null
    ).exec();
    res.send(lastWorkExp.length ? "Last work deleted" : "no work found").end();
  }
};
