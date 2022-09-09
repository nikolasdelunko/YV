const Skills = require("../../models/skills.model");

exports.deleteSkills = async (req, res) => {
  const skills = await Skills.find().exec();
  if (!skills) {
    res.status(404).send(`soft skill not found`).end();
  } else {
    const lastSkill = skills.slice(-1);
    await Skills.findByIdAndDelete(
      lastSkill.length ? lastSkill[0]._id : null
    ).exec();
    res
      .send(
        lastSkill.length
          ? `${lastSkill[0].skill} Hard skill deleted`
          : `no soft skill`
      )
      .end();
  }
};

exports.deleteSkillsById = async (req, res) => {
  const skills = await Skills.find().exec();
  if (!skills) {
    res.status(404).send(`Hard skill not found`).end();
  } else {
    await Skills.findByIdAndDelete(req.params.id).exec();
    res.send(`Hard skill with id  ${req.params.id} deleted`).end();
  }
};
