const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");

const { getSkills } = require("./get.hendlers");
const { postSkills } = require("./post.hendlers");
const { deleteSkills, deleteSkillsById } = require("./delete.hendlers");

router.get("/skills", getSkills);
router.post("/skills", postSkills);
router.delete("/skills", deleteSkills);
router.delete("/skills/:id", deleteSkillsById);

module.exports = router;
