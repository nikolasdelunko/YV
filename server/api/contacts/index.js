const express = require("express");
const router = express.Router();
// const { authorization } = require("../../data/authorization");

const { getContacts, getContactsById } = require("./get.hendlers");
const { patchContacts } = require("./patch.hendlers.js");
const { postContacts } = require("./post.hendlers");
const {
  deleteContactsById,
  deleteContacts,
} = require("./delete.hendlers");

router.get("/contacts", getContacts);
router.get("/contacts/:id", getContactsById);
router.patch("/contacts/:id", patchContacts);
router.post("/contacts", postContacts);
router.delete("/contacts/:id", deleteContactsById);
router.delete("/contacts", deleteContacts);

module.exports = router;
