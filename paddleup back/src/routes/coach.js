const express = require("express");
const router = express.Router();
require("dotenv").config();

const { getCoachController } = require("../controllers/coachController");
const { authenticateJWT } = require("../middleware/jwtVerify");

router.get("/getCoach", authenticateJWT, getCoachController);

module.exports = router;
