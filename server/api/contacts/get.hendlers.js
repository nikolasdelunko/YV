const Contacts = require("../../models/contacts.model");

exports.getContactsById = async (req, res) => {
  const contacts = await Contacts.findById(req.params.id).exec();

  if (!contacts) {
    res.status(404).send(`contacts not found`).end();
  }

  res.send(contacts).end();
};

exports.getContacts = async (req, res) => {
  const contacts = await Contacts.find().exec();

  if (!contacts) {
    res.status(404).send(`contacts not found`).end();
  }

  res.send(contacts).end();
};
