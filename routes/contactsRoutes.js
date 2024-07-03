const express = require("express");

const router = express.Router();
const {
  getContact,
  addContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactsController");

router.route("/").get(getContact).post(addContact);
router
  .route("/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
