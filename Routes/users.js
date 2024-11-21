const express = require("express");
const UserModel = require("../Models/userModel");
const router = express.Router();

// * Get all users
router.get("/", async (req, res) => {
  try {
    const users = await UserModel.find();
    return res.status(200).json(users);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// * Get a user by id
router.get("/:id", async (req, res) => {
  try {
    const user = await UserModel.findById(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json(user);
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// * Create a user
router.post("/", async (req, res) => {
  try {
    const newUser = new UserModel({
      name: req.body.name,
      email: req.body.email,
      passwordHash: req.body.passwordHash,
      role: req.body.role,
      profilePictureUrl: req.body.profilePictureUrl,
    });
    const user = await newUser.save();
    return res.status(201).json({ user, msg: "User created" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// * Update a user
router.put("/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndUpdate(
      req.params.id,
      {
        name: req.body.name,
        email: req.body.email,
        passwordHash: req.body.passwordHash,
        role: req.body.role,
        profilePictureUrl: req.body.profilePictureUrl,
      },
      { new: true }
    );
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ user, msg: "User updated" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

// * Delete a user
router.delete("/:id", async (req, res) => {
  try {
    const user = await UserModel.findByIdAndDelete(req.params.id);
    if (!user) return res.status(404).json({ error: "User not found" });
    return res.status(200).json({ user, msg: "User deleted" });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
});

module.exports = router;