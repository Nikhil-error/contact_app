const asyncHandler = require("express-async-handler");
// const Contact = require("../models/contactModel");
//@des Rest of contact controller functions will be here
//method GET, POST, PUT, DELETE
//access PUBLIC

//@route /api/users/register
const registerUser = asyncHandler(async (req, res) => {
  res.json({ message: "User Registration Page" });
});

//@route /api/users/login
const loginUser = asyncHandler(async (req, res) =>{
    res.json({ message: "User Login Page" });
});

//@route /api/users/current
//Private
const getCurrentUser = asyncHandler(async (req, res) =>{
    res.json({ message: "Current User Page" });
});



module.exports = {
  registerUser,
  loginUser,
  getCurrentUser
};
