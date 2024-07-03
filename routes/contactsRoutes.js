const express = require("express");

const router = express.Router();
const {
  getContact,
  addContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactsController");

router.route("/").get(getContact);

router.route("/").post(addContact);

router.route("/:id").get(getSingleContact);

router.route("/:id").put(updateContact);

router.route("/:id").delete(deleteContact);

module.exports = router;
