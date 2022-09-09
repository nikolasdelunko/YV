const Contacts = require("../../models/contacts.model");

exports.deleteContactsById = async (req, res) => {
  const contacts = await Contacts.find().exec();
  if (!contacts) {
    res.status(404).send(`education not found`).end();
  } else {
    await Contacts.findByIdAndDelete(req.params.id).exec();
    res.send(`Education with id  ${req.params.id} deleted`).end();
  }
};

exports.deleteContacts = async (req, res) => {
  const contacts = await Contacts.find().exec();
  if (!contacts) {
    res.status(404).send(`education not found`).end();
  } else {
    const lastContact = contacts.slice(-1);
    await Contacts.findByIdAndDelete(
      lastContact.length ? lastContact[0]._id : null
    ).exec();
    res
      .send(
        lastContact.length
          ? "Last contacts deleted successfully"
          : "no contacts found"
      )
      .end();
  }
};
