const express = require("express");

const router = express.Router();

const { login, signup } = require("../controllers/Auth");

const { auth, isAdmin } = require("../middlewares/auth");
const { createForm, getAllForms } = require("../controllers/Form");

router.post("/login", login);
router.post("/signup", signup);
router.post("/createForm", auth, createForm);
router.get("/getAllForms", auth, isAdmin, getAllForms);

module.exports = router;
