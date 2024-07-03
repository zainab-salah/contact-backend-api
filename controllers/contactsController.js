const asyncHandler = require("express-async-handler");
//@desc Get All Contacts
//@route GET /api/contacts
//@access Public
const getContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
});
//@desc create new Contacts
//@route Post /api/contacts
//@access Public
const addContact = asyncHandler(async (req, res) => {
  console.log(req.body);
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  res.status(200).json({ message: "Create a new contact" });
});
//@desc Get Single Contacts
//@route GET /api/contacts/:id
//@access Public
const getSingleContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Get contact with id ${req.params.id}` });
});

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update contact with id ${req.params.id}` });
});

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
});

module.exports = {
  getContact,
  addContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
