const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");

const { getCertificates, getCertificatesById } = require("./get.hendlers");
const { patchCertificates } = require("./patch.hendlers");
const { postCertificates } = require("./post.hendlers");
const {
  deleteCertificatesById,
  deleteCertificates,
} = require("./delete.hendlers");

router.get("/certificates", getCertificates);
router.get("/certificates/:id", getCertificatesById);
router.patch("/certificates/:id", patchCertificates);
router.post("/certificates", postCertificates);
router.delete("/certificates/:id", deleteCertificatesById);
router.delete("/certificates", deleteCertificates);

module.exports = router;
