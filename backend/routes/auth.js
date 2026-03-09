const express = require("express");
const router = express.Router();

const {
  loginUser,
  registerUser
} = require("../controllers/authController");

const authMiddleware = require("../middleware/authMiddleware");

router.post("/login", loginUser);

router.post("/register", registerUser);

router.get("/admin-data", authMiddleware, (req, res) => {

  res.json({
    users: 120,
    orders: 45,
    revenue: "₹50000",
    loggedInUser: req.user.username
  });

});

module.exports = router;