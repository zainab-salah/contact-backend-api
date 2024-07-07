const express = require("express");

const {
  reigsterUser,
  loginUser,
  currentUser,
} = require("../controllers/usersController");

const router = express.Router();

router.post("/register", reigsterUser);

router.post("/login", loginUser);

router.get("/current", currentUser);

module.exports = router;
