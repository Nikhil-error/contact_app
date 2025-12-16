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
  res.status(201).json({
    message: "Post Contact Page",
    data: { name, email, phone },
  });
});

//@route /api/contact/:id
const updateContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Update Contact for ${req.params.id}` });
});

//@route /api/contact/:id
const deleteContact = asyncHandler(async (req, res) => {
  res.status(200).json({ message: `Delete Contact for ${req.params.id}` });
});

module.exports = {
  getContact,
  createContact,
  updateContact,
  deleteContact,
};
