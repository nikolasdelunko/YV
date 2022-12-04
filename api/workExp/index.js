const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getWorkExp, getWorkExpById } = require("./get.hendlers");
const { postWorkExp } = require("./post.hendlers");
const { deleteWorkExp, deleteWorkExpById } = require("./delete.hendlers");
const { patchWorkExp } = require("./patch.hendlers");

router.get("/WorkExp", getWorkExp);
router.get("/WorkExp/:id", getWorkExpById);
router.patch("/WorkExp/:id", patchWorkExp);
router.post("/WorkExp", verify, postWorkExp);
router.delete("/WorkExp", verify, deleteWorkExp);
router.delete("/WorkExp/:id", verify, deleteWorkExpById);

module.exports = router;
