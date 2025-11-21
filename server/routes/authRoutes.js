const express = require("express");
const router = express.Router();
const userController = require("../controllers/authController");
const auth = require("../middleware/authMiddleware");

router.post("/create", userController.createUser);
router.post("/login", userController.loginUser);
router.get("/profile", auth, userController.getProfile);

module.exports = router;
