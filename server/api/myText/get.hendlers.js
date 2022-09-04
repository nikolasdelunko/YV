const MyText = require("../../models/myText.model");

exports.getMyText = async (req, res) => {
  const myText = await MyText.find().exec();
  if (!myText) {
    res.status(404).send(`Text not found`).end();
  }
  res.send(myText).end();
};
