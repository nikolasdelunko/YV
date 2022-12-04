const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");
const { getUpload } = require("./get.hendlers");
const { postUpload } = require("./post.hendlers");
const { deleteUpload } = require("./delete.hendlers");

router.get("/upload", getUpload);
router.post("/upload", verify, postUpload);
router.delete("/upload", verify, deleteUpload);

module.exports = router;
