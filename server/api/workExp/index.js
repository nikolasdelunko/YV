const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");

const { getWorkExp, getWorkExpById } = require("./get.hendlers");
const { postWorkExp } = require("./post.hendlers");
const { deleteWorkExp, deleteWorkExpById } = require("./delete.hendlers");

router.get("/WorkExp", getWorkExp);
router.get("/WorkExp/:id", getWorkExpById);
router.post("/WorkExp", postWorkExp);
router.delete("/WorkExp", deleteWorkExp);
router.delete("/WorkExp/:id", deleteWorkExpById);

module.exports = router;
