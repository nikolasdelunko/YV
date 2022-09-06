const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getMyText } = require("./get.hendlers");
const { patchMyText } = require("./patch.hendlers");
const { postMyText } = require("./post.hendlers");
const { deleteMyTextById, deleteMyText } = require("./delete.hendlers");

router.get("/myText", getMyText);
router.patch("/myText/:id", verify, patchMyText);
router.post("/myText", verify, postMyText);
router.delete("/myText/:id", verify, deleteMyTextById);
router.delete("/myText", verify, deleteMyText);

module.exports = router;
