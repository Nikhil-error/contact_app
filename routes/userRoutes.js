const express = require("express");
const router = express.Router();
const {
  registerUser,
  loginUser,
  getCurrentUser,
} = require("../controllers/userControllers");

// Define user-related routes here
router.post("/register", registerUser);

router.post("/login", loginUser);

router.get("/current", getCurrentUser);

module.exports = router;
