const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getEducation, getEducationById } = require("./get.hendlers");
const { postEducation } = require("./post.hendlers");
const { deleteEducationById, deleteEducation } = require("./delete.hendlers");

router.get("/education/:id", getEducationById);
router.get("/education", getEducation);
router.post("/education", verify, postEducation);
router.delete("/education", verify, deleteEducation);
router.delete("/education/:id", verify, deleteEducationById);

module.exports = router;
