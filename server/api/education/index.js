const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");
const { getEducation, getEducationById } = require("./get.hendlers");
const { postEducation } = require("./post.hendlers");
const { deleteEducationById, deleteEducation } = require("./delete.hendlers");

router.get("/education/:id", getEducationById);
router.get("/education", getEducation);
router.post("/education", postEducation);
router.delete("/education", deleteEducation);
router.delete("/education/:id", deleteEducationById);

module.exports = router;
