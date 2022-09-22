const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");
const { getCv } = require("./get.hendlers");
const { postCv } = require("./post.hendlers");
const { deleteCv } = require("./delete.hendlers");
const { patchCv } = require("./path.hendlers");

router.get("/cv", getCv);
router.post("/cv", verify, postCv);
router.delete("/cv", verify, deleteCv);
router.patch("/cv/:id", verify, patchCv);
module.exports = router;
