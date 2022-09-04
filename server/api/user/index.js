const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");

const { getUsers, getUsersById } = require("./get.hendlers");
const { patchUsers } = require("./patch.hendlers.js");
const { postUsers } = require("./post.hendler");
const { deleteUsersById, deleteUsers } = require("./delete.hendlers");

router.get("/users", getUsers);
router.get("/users/:id", getUsersById);
router.patch("/users/:id", patchUsers);
router.post("/users", postUsers);
router.delete("/users/:id", deleteUsersById);
router.delete("/users", deleteUsers);

module.exports = router;
