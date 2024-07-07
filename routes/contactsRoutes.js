const express = require("express");

const router = express.Router();
const {
  getContact,
  addContact,
  getSingleContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactsController");
const validateTokenHandler = require("../middleware/validateTokenHandler");

router.use(validateTokenHandler)
router.route("/").get(getContact).post(addContact);
router
  .route("/:id")
  .get(getSingleContact)
  .put(updateContact)
  .delete(deleteContact);

module.exports = router;
