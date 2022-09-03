const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");

const { getAbout } = require("./get.hendlers");
const { postAbout } = require("./post.hendlers");
const { deleteAbout, deleteAboutById } = require("./delete.hendlers");

router.get("/about", getAbout);
router.post("/about", postAbout);
router.delete("/about", deleteAbout);
router.delete("/about/:id", deleteAboutById);

module.exports = router;
