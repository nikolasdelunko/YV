const express = require("express");
const router = express.Router();
const verify = require("../../helpers/verfyToken");

const { getContacts, getContactsById } = require("./get.hendlers");
const { patchContacts } = require("./patch.hendlers.js");
const { postContacts } = require("./post.hendlers");
const { deleteContactsById, deleteContacts } = require("./delete.hendlers");

router.get("/contacts", getContacts);
router.get("/contacts/:id", getContactsById);
router.patch("/contacts/:id", verify, patchContacts);
router.post("/contacts", verify, postContacts);
router.delete("/contacts/:id", verify, deleteContactsById);
router.delete("/contacts", verify, deleteContacts);

module.exports = router;
