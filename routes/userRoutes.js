const express = require("express");

const {
  reigsterUser,
  loginUser,
  currentUser,
} = require("../controllers/usersController");
const validateTokenHandler = require("../middleware/validateTokenHandler");

const router = express.Router();

router.post("/register", reigsterUser);

router.post("/login", loginUser);

router.get("/current", validateTokenHandler, currentUser);

module.exports = router;
