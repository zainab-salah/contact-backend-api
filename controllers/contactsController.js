const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get All Contacts
//@route GET /api/contacts
//@access Public
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json(contacts);
});
//@desc create new Contacts
//@route Post /api/contacts
//@access Public
const addContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  const contacts = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json(contacts);
});
//@desc Get Single Contacts
//@route GET /api/contacts/:id
//@access Public
const getSingleContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json(contacts);
});

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);

  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
 const updatedContacts =  await Contact.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });
  res.status(200).json(updatedContacts);
});

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
  const deletedContact = await Contact.findByIdAndDelete(req.params.id);
  res.status(200).json(deletedContact);
});

module.exports = {
  getContact,
  addContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
