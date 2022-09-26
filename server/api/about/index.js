const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getAbout } = require("./get.hendlers");
const { postAbout } = require("./post.hendlers");
const { deleteAbout, deleteAboutById } = require("./delete.hendlers");

router.get("/soft", getAbout);
router.post("/soft", verify, postAbout);
router.delete("/soft", verify, deleteAbout);
router.delete("/soft/:id", verify, deleteAboutById);

module.exports = router;
