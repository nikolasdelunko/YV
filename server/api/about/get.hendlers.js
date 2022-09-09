const About = require("../../models/about.model");

exports.getAbout = async (req, res) => {
  const about = await About.find().exec();
  if (!about) {
    res.status(404).send(`About not found`).end();
  }
  res.send(about).end();
};
