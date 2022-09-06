const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getAbout } = require("./get.hendlers");
const { postAbout } = require("./post.hendlers");
const { deleteAbout, deleteAboutById } = require("./delete.hendlers");

router.get("/about", getAbout);
router.post("/about", verify, postAbout);
router.delete("/about", verify, deleteAbout);
router.delete("/about/:id", verify, deleteAboutById);

module.exports = router;
