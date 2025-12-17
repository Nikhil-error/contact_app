const asyncHandler = require("express-async-handler");
const Contact = require("../models/contactModel");
//@des All contact controller functions will be here
//method GET, POST, PUT, DELETE
//access PUBLIC

//@route /api/contact
const getContact = asyncHandler(async (req, res) => {
  const contacts = await Contact.find();
  res.status(200).json({ message: "Get Contact Page" , data: contacts });
});

//@route /api/contact
const createContact = asyncHandler(async (req, res) => {
  // console.log(`The request body is`,req.body);

  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    res.status(400);
    throw new Error("All fields are mandatory!");
  }
  const contact = await Contact.create({
    name,
    email,
    phone,
  });
  res.status(201).json({
    message: "Post Contact Page",
    data: contact,
  });
});

//@route /api/contact/:id
const getContactById = asyncHandler(async (req, res) => {
  const contact = await Contact.findById(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ message: `Get Contact for ${req.params.id}`, data: contact });
});


//@route /api/contact/:id
const updateContact = asyncHandler(async (req, res) => {
  const updateContact = await Contact.findByIdAndUpdate(
    req.params.id,
    req.body,
    { new: true ,runValidators: true}
  )
  res.status(200).json({ message: `Update Contact for ${req.params.id}`, data: updateContact });
});

//@route /api/contact/:id
const deleteContact = asyncHandler(async (req, res) => {
  const contact = await Contact.findByIdAndDelete(req.params.id);
  if (!contact) {
    res.status(404);
    throw new Error("Contact not found");
  }
  res.status(200).json({ message: `Delete Contact for ${req.params.id}`, data: contact });
});

module.exports = {
  getContact,
  createContact,
  getContactById,
  updateContact,
  deleteContact,
};
