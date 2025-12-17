const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userControllers");
const validateTokenHandler = require("../middleware/validateTokenHandler");

// Define user-related routes here
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", validateTokenHandler, getCurrentUser);

module.exports = router;
