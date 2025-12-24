const express = require("express");
const router = express.Router();
require("dotenv").config();

const {
  getCoachController,
  bookCoachController,
  getOneCoachController,
  getSpecificBookByUserIdController,
} = require("../controllers/coachController");
const { authenticateJWT } = require("../middleware/jwtVerify");

router.get("/getCoach", getCoachController);
router.post("/bookCoach", bookCoachController);
router.get("/getOneCoach/:coachId", getOneCoachController);
router.get("/getBookUser/:userId", getSpecificBookByUserIdController);

module.exports = router;
