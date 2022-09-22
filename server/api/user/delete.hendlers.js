const Users = require("../../models/user.model");

exports.deleteUsersById = async (req, res) => {
  const users = await Users.find().exec();
  if (!users) {
    res.status(404).send(`education not found`).end();
  } else if (req.params.id == users[0]._id) {
    res.send(`ERROR!!! ADMINISTRATOR not deleted`).end();
  } else {
    await Users.findByIdAndDelete(req.params.id).exec();
    res.send(`user with id  ${req.params.id} deleted`).end();
  }
};

exports.deleteUsers = async (req, res) => {
  const users = await Users.find().exec();
  if (!users) {
    res.status(404).send(`User not found`).end();
  } else {
    const lastUser = users.slice(-1);
    await Users.findByIdAndDelete(
      users.length <= 1 ? null : lastUser[0]._id
    ).exec();
    res
      .send(
        users.length <= 1
          ? "no optional users found"
          : `user  ${lastUser[0].name} deleted successfully`
      )
      .end();
  }
};
