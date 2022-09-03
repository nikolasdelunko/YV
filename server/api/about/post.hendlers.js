const About = require("../../models/about.model");

exports.postAbout = async (req, res) => {
  const about = await About.find().exec();
  if (!about) {
    res.status(404).send(`About not found`).end();
  } else if (
    req.body.skill === undefined ||
    req.body.skill === null ||
    req.body.skill.length < 3 ||
    req.body.skill.trim() === ""
  ) {
    res.send("please write 1 you soft skill").end();
  } else {
    const newAbout = new About(req.body);
    await newAbout.save();
    res.send(` you succes added  skill: ${req.body.skill} `).end();
  }
};
