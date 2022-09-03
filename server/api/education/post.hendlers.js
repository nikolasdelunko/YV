const Education = require("../../models/education.model");

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};

exports.postEducation = async (req, res) => {
  const education = await Education.find().exec();
  if (!education) {
    res.status(404).send(`education not found`).end();
  }

  const requiredKeys = ["name", "specialization", "year"];
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
    const edu = new Education(
      [...keys].reduce((acc, el) => ({ ...acc, [el]: req.body[el] }), {})
    );
    edu._id = generateId(education);
    await edu.save();
    res.send(`Education name: ${edu.name} created! id - ${edu._id}`).end();
  }
};
