const Contacts = require("../../models/contacts.model");

exports.postContacts = async (req, res) => {
  const contacts = await Contacts.find().exec();
  if (!contacts) {
    res.status(404).send(`contacts not found`).end();
  }
  const requiredKeys = ["phone", "email"];
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
    const contact = new Contacts(
      [...keys].reduce((acc, el) => ({ ...acc, [el]: req.body[el] }), {})
    );
    await contact.save();
    res.send(`contact created!`).end();
  }
};
