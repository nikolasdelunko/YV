const Skills = require("../../models/skills.model");

exports.getSkills = async (req, res) => {
  const skills = await Skills.find().exec();
  if (!skills) {
    res.status(404).send(`skills not found`).end();
  }
  res.send(skills).end();
};
