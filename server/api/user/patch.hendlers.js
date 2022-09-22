const Users = require("../../models/user.model");

exports.patchUsers = async (req, res) => {
  const user = await Users.find().exec();
  if (!user) {
    res.status(404).send("users not found").end();
  } else if (
    req.body.email === undefined ||
    req.body.email === null ||
    req.body.email.trim() === ""
  ) {
    res.send("please write email").end();
  } else if (
    req.body.password === undefined ||
    req.body.password === null ||
    req.body.password.trim() === ""
  ) {
    res.send("please write password").end();
  } else {
    await Users.findByIdAndUpdate(req.params.id, req.body).exec();
    res.send("user updated successfully");
  }
};
