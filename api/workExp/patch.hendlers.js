const WorkExp = require("../../models/workExp.model");
const { workExpValidation } = require("../../helpers/validation");

exports.patchWorkExp = async (req, res) => {
  const workExp = await WorkExp.find().exec();
  const { error } = workExpValidation(req.body);
  if (!workExp) {
    res.status(404).send("contacts not found").end();
  } else if (error) return res.status(400).send(error?.details[0].message);
  else {
    await WorkExp.findByIdAndUpdate(req.params.id, req.body).exec();
    res.send("workExp updated successfully");
  }
};
