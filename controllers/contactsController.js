const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@desc Get All Contacts
//@route GET /api/contacts
//@access Private
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find({
    user_id: req.user.id,
  });
  res.status(200).json(contacts);
});
//@desc create new Contacts
//@route Post /api/contacts
//@access Private
const addContact = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
  const contacts = await Contact.create({
    name,
    email,
    phone,
    user_id: req.user.id,
  });
  res.status(201).json(contacts);
});
//@desc Get Single Contacts
//@route GET /api/contacts/:id
//@access Private
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
//@access Private
const updateContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);

  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if(contacts.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("User not authorized to update this contact");
  }
  const updatedContacts = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    {
      new: true,
    }
  );
  res.status(200).json(updatedContacts);
}); 

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access Private
const deleteContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.findById(req.params.id);
  if (!contacts) {
    res.status(404);
    throw new Error("Contact not found");
  }
  if(contacts.user_id.toString() !== req.user.id){
    res.status(403);
    throw new Error("User not authorized to update this contact");
  }
  await Contact.deleteOne({
    _id: req.params.id,
  })
  res.status(200).json(contacts);
});

module.exports = {
  getContact,
  addContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
