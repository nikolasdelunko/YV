const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");

const { getMyText } = require("./get.hendlers");
const { patchMyText } = require("./patch.hendlers");
const { postMyText } = require("./post.hendlers");
const { deleteMyTextById, deleteMyText } = require("./delete.hendlers");

router.get("/myText", getMyText);
router.patch("/myText/:id", patchMyText);
router.post("/myText", postMyText);
router.delete("/myText/:id", deleteMyTextById);
router.delete("/myText", deleteMyText);

module.exports = router;
