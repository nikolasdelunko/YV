const express = require("express");
const router = express.Router();

const { getUsers, getUsersById } = require("./get.hendlers");
const { patchUsers } = require("./patch.hendlers.js");
const { postUsers, loginUser } = require("./post.hendler");
const { deleteUsersById, deleteUsers } = require("./delete.hendlers");
const verify = require("../../helpers/verfyToken");

router.get("/users", verify, getUsers);
router.get("/users/:id", verify, getUsersById);
router.patch("/users/:id", verify, patchUsers);
router.post("/users", postUsers);
router.post("/users/login", loginUser);
router.delete("/users/:id", verify, deleteUsersById);
router.delete("/users", verify, deleteUsers);

module.exports = router;
