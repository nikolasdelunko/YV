const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");
const { getCv } = require("./get.hendlers");
const { postCv } = require("./post.hendlers");
const { deleteCv } = require("./delete.hendlers");

router.get("/cv", getCv);
router.post("/cv", verify, postCv);
router.delete("/cv", verify, deleteCv);

module.exports = router;
