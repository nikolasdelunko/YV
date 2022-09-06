const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getCertificates, getCertificatesById } = require("./get.hendlers");
const { patchCertificates } = require("./patch.hendlers");
const { postCertificates } = require("./post.hendlers");
const {
  deleteCertificatesById,
  deleteCertificates,
} = require("./delete.hendlers");

router.get("/certificates", getCertificates);
router.get("/certificates/:id", getCertificatesById);
router.patch("/certificates/:id", verify, patchCertificates);
router.post("/certificates", verify, postCertificates);
router.delete("/certificates/:id", verify, deleteCertificatesById);
router.delete("/certificates", verify, deleteCertificates);

module.exports = router;
