const express = require("express");
const router = express.Router();
require("dotenv").config();
const {
  loginController,
  registerController,
  getUserController,
} = require("../controllers/loginController");

router.post("/login", loginController);
router.post("/register", registerController);
router.get("/getUser/:userId", getUserController);

module.exports = router;
