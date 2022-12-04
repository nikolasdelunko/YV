const MyText = require("../../models/myText.model");

exports.deleteMyTextById = async (req, res) => {
  const myText = await MyText.find().exec();
  if (!myText) {
    res.status(404).send(`text not found`).end();
  } else {
    await MyText.findByIdAndDelete(req.params.id).exec();
    res.send(`text with id  ${req.params.id} deleted`).end();
  }
};

exports.deleteMyText = async (req, res) => {
  const myText = await MyText.find().exec();
  if (!myText) {
    res.status(404).send(`text not found`).end();
  } else {
    const lastText = myText.slice(-1);
    await MyText.findByIdAndDelete(
      lastText.length ? lastText[0]._id : null
    ).exec();
    res
      .send(
        lastText.length
          ? ` soft skill ${req.body.text
              .split(" ")
              .slice(0, 8)
              .join(" ")}...  deleted`
          : `no text found`
      )
      .end();
  }
};
