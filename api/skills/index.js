const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getSkills } = require("./get.hendlers");
const { postSkills } = require("./post.hendlers");
const { deleteSkills, deleteSkillsById } = require("./delete.hendlers");

router.get("/skills", getSkills);
router.post("/skills", verify, postSkills);
router.delete("/skills", verify, deleteSkills);
router.delete("/skills/:id", verify, deleteSkillsById);

module.exports = router;
