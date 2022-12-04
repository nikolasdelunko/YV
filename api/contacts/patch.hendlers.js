const Contacts = require("../../models/contacts.model");

exports.patchContacts = async (req, res) => {
  const contacts = await Contacts.find().exec();
  if (!contacts) {
    res.status(404).send("contacts not found").end();
  }else if (
		    req.body.email === undefined ||
		    req.body.email === null ||
		    req.body.email.trim() === ""
		  ) {
		    res.send("please write email").end();
		  } else if (
		    req.body.phone === undefined ||
		    req.body.phone === null ||
		    req.body.phone.trim() === ""
		  ) {
		    res.send("please write Phone").end();
		  } 
	else {
    await Contacts.findByIdAndUpdate(req.params.id, req.body).exec();
    res.send("contacts updated successfully");
  }
};
