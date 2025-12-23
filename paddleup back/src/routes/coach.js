const express = require("express");
const router = express.Router();
require("dotenv").config();
const { getCoachController } = require("../controllers/coachController");

router.post("/getCoach", getCoachController);

module.exports = router;
