const Users = require("../../models/user.model");

exports.getUsersById = async (req, res) => {
  const users = await Users.findById(req.params.id).exec();
  if (!users) {
    res.status(404).send(`user not found`).end();
  } else {
    res.send(users).end();
  }
};

exports.getUsers = async (req, res) => {
  const users = await Users.find().exec();

  if (!users) {
    res.status(404).send(`users not found`).end();
  } else {
    res.send(users).end();
  }
};
