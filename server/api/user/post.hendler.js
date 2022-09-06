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
    res.send({ user: user._id });
  } catch (error) {
    res.status(400).send(error);
  }
};






// ? OLD Code
// exports.postUsers = async (req, res) => {
//   const users = await Users.find().exec();
//   if (!users) {
//     res.status(404).send(`contacts not found`).end();
//   }
//   const requiredKeys = ["login", "password"];
//   const keys = Object.keys(req.body).filter((k) => requiredKeys.includes(k));
//   if (keys.length !== requiredKeys.length) {
//     res
//       .status(400)
//       .send(`keys ${requiredKeys.join(",")} are required!`)
//       .end();
//   } else {
//     keys.forEach((k) => {
//       if (req.body[k] === null || req.body === undefined) {
//         res.status(400).send(`key ${k} is required`).end();
//       }
//     });
//     const user = new Users(
//       [...keys].reduce((acc, el) => ({ ...acc, [el]: req.body[el] }), {})
//     );
//     user._id = generateId(users);
//     await user.save();
//     res.send(`User is username ${user.login} created! id - ${user._id}`).end();
//   }
// }
