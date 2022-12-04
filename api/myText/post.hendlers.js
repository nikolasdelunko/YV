const MyText = require("../../models/myText.model");

exports.postMyText = async (req, res) => {
  const myText = await MyText.find().exec();
  if (!myText) {
    res.status(404).send(`text not found`).end();
  } else if (
    req.body.text === undefined ||
    req.body.text === null ||
    req.body.text.trim() === ""
  ) {
    res.send("please write you text").end();
  } else if (req.body.text.length < 25) {
    res.send("please write 25 and more characters").end();
  } else {
    const newMyText = new MyText(req.body);
    await newMyText.save();
    res
      .send(
        ` you succes added  text: ${req.body.text
          .split(" ")
          .slice(0, 8)
          .join(" ")}... `
      )
      .end();
  }
};
