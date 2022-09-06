const express = require("express");
const dotenv = require("dotenv");

const users = require("./user");

dotenv.config();

const app = express();

exports.app.use("/", async (req, res, next) => {
  const b64auth = (req.headers.authorization || "").split(" ")[1] || "";
  const first = Buffer.from(b64auth, "base64");
  const second = first.toString();
  const third = second.split(":");

  const username = third[0];
  const password = third[1];

  const user = users.find((u) => u.login === username);

  const userNotFound = !user;
  const passwordsNotMatch = user && user.password !== password;
  if (userNotFound || passwordsNotMatch) {
    res.status(401).send({
      message: userNotFound ? "User not found" : "Passwords not math",
    });
    return;
  }
  req.currentUser = user;
  next();
});
