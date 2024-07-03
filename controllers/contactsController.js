//@desc Get All Contacts
//@route GET /api/contacts
//@access Public
const getContact = (req, res) => {
  res.status(200).json({ message: "Get all contacts" });
};
//@desc create new Contacts
//@route Post /api/contacts
//@access Public
const addContact = (req, res) => {
  res.status(200).json({ message: "Create a new contact" });
};
//@desc Get Single Contacts
//@route GET /api/contacts/:id
//@access Public
const getSingleContact = (req, res) => {
  res.status(200).json({ message: `Get contact with id ${req.params.id}` });
};

//@desc Update Contacts
//@route PUT /api/contacts/:id
//@access Public
const updateContact = (req, res) => {
  res.status(200).json({ message: `Update contact with id ${req.params.id}` });
};

//@desc Delete Contacts
//@route DELETE /api/contacts/:id
//@access Public
const deleteContact = (req, res) => {
  res.status(200).json({ message: `Delete contact with id ${req.params.id}` });
};

module.exports = {
  getContact,
  addContact,
  getSingleContact,
  updateContact,
  deleteContact,
};
