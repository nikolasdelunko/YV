const User = require("../../models/user.model");
const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const {
  registerValidation,
  loginValidation,
} = require("../../helpers/validation");

const generateId = (data) => {
  const id = Math.floor(Math.random() * (1000 - 1)) + 1;
  return data.find((u) => u.id === id) ? generateId(data) : id;
};

exports.postUsers = async (req, res) => {
  const { error } = registerValidation(req.body);
  if (error) return res.status(400).send(error?.details[0].message);

  const emailExist = await User.findOne({ email: req.body.email });
  if (emailExist) return res.status(400).send("email already exists");

  const salt = await bcrypt.genSalt(10);
  const hashPassword = await bcrypt.hash(req.body.password, salt);

  const user = new User({
    name: req.body.name,
    email: req.body.email,
    password: hashPassword,
  });
  try {
    user.save();
    res.send(`user with  name: ${user.name} created`);
  } catch (error) {
    res.status(400).send(error);
  }
};

exports.loginUser = async (req, res) => {
  const { error } = loginValidation(req.body);
  if (error) return res.status(400).send(error?.details[0].message);

  const user = await User.findOne({ email: req.body.email });
  if (!user) return res.status(400).send("email is  wrong");

  const validPass = await bcrypt.compare(req.body.password, user.password);
  if (!validPass) return res.status(400).send("password is wrong");

  const token = jwt.sign({ _id: user._id }, process.env.JWT_ACCESS_SECRET);
  res.header("auth-token", token).send(token);
};
