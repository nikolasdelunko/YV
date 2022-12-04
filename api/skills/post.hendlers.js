const Skills = require("../../models/skills.model");

exports.postSkills = async (req, res) => {
  const skills = await Skills.find().exec();
  if (!skills) {
    res.status(404).send(`Skills not found`).end();
  } else if (
    req.body.skill === undefined ||
    req.body.skill === null ||
    req.body.skill.length < 3 ||
    req.body.skill.trim() === ""
  ) {
    res.send("please write 1 you soft skill").end();
  } else {
    const newSkills = new Skills(req.body);
    await newSkills.save();
    res.send(` you succes added  skill: ${req.body.skill} `).end();
  }
};
