const express = require("express");
const router = express.Router();
// import { getContact } from '../controllers/contactController';
const {
  getContact,
  createContact,
  updateContact,
  deleteContact,
} = require("../controllers/contactController");

router.route("/").get(getContact).post(createContact);
// router.route("/").post(createContact);
router.route("/:id").put(updateContact).delete(deleteContact);
// router.route("/:id").delete(deleteContact);

module.exports = router;
