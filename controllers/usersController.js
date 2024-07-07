const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");
//@desc Register new user
//@route Post /api/user
//@access Public
const reigsterUser = asyncHandler(async (req, res) => {
  const { name, email, phone } = req.body;
  if (!name || !email || !phone) {
    return res.status(400).json({ message: "Please enter all fields" });
  }

  const users = await User.create({
    name,
    email,
    phone,
  });
  res.status(201).json(users);
});
//@desc Login user
//@route Post /api/user/login
//@access Public
const loginUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
});

//@desc current user
//@route Post /api/user/current
//@access Public
const currentUser = asyncHandler(async (req, res) => {
  const { email, password } = req.body;
  if (!email || !password) {
    return res.status(400).json({ message: "Please enter all fields" });
  }
});
module.exports = {
  reigsterUser,
  loginUser,
  currentUser
};
