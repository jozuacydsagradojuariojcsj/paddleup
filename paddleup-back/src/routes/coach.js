const express = require("express");
const router = express.Router();
require("dotenv").config();

const { getCoachController, bookCoachController } = require("../controllers/coachController");
const { authenticateJWT } = require("../middleware/jwtVerify");

router.get("/getCoach", authenticateJWT, getCoachController);
router.post("/bookCoach", authenticateJWT ,bookCoachController);

module.exports = router;
