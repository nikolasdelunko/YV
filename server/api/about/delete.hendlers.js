const About = require("../../models/about.model");

exports.deleteAbout = async (req, res) => {
  const about = await About.find().exec();
  if (!about) {
    res.status(404).send(`soft skill not found`).end();
  } else {
    const lastSkill = about.slice(-1);
    await About.findByIdAndDelete(
      lastSkill.length ? lastSkill[0]._id : null
    ).exec();
    res
      .send(
        lastSkill.length
          ? `${lastSkill[0].skill} soft skill deleted`
          : `no soft skill`
      )
      .end();
  }
};

exports.deleteAboutById = async (req, res) => {
  const about = await About.find().exec();
  if (!about) {
    res.status(404).send(`soft skill not found`).end();
  } else {
    await About.findByIdAndDelete(req.params.id).exec();
    res.send(`soft skill with id  ${req.params.id} deleted`).end();
  }
};
