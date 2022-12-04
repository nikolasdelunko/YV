const WorkExp = require("../../models/workExp.model");

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};

exports.postWorkExp = async (req, res) => {
  const workExp = await WorkExp.find().exec();
  if (!workExp) {
    res.status(404).send(`Work not found`).end();
  }

  const requiredKeys = ["name", "specialization", "year", "description"];
  const keys = Object.keys(req.body).filter((k) => requiredKeys.includes(k));
  if (keys.length !== requiredKeys.length) {
    res
      .status(400)
      .send(`keys ${requiredKeys.join(",")} are required!`)
      .end();
  } else {
    keys.forEach((k) => {
      if (req.body[k] === null || req.body === undefined) {
        res.status(400).send(`key ${k} is required`).end();
      }
    });
    const workE = new WorkExp(
      [...keys].reduce((acc, el) => ({ ...acc, [el]: req.body[el] }), {})
    );
    workE._id = generateId(workExp);
    await workE.save();
    res.send(`Work name: ${workE.name} created! id - ${workE._id}`).end();
  }
};
