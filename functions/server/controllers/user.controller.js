const User = require('../models/user.model');

// Get all users (exclude password)
exports.getAll = async (req, res) => {
  try {
    const list = await User.find().select('-password');
    res.json(list);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Get one user by ID
exports.getById = async (req, res) => {
  try {
    const user = await User.findById(req.params.id).select('-password');
    if (!user) return res.status(404).json({ error: 'Not found' });
    res.json(user);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Create new user
exports.create = async (req, res) => {
  try {
    const newUser = new User(req.body);
    await newUser.save();
    res.status(201).json({ message: 'User created' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Update existing user
exports.update = async (req, res) => {
  try {
    const updated = await User.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true }
    ).select('-password');
    if (!updated) return res.status(404).json({ error: 'Not found' });
    res.json(updated);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete one user
exports.remove = async (req, res) => {
  try {
    await User.findByIdAndDelete(req.params.id);
    res.json({ message: 'User deleted' });
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

// Delete all users
exports.removeAll = async (req, res) => {
  try {
    await User.deleteMany();
    res.json({ message: 'All users deleted' });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

// Alias getById for protected read in auth routes
exports.read = (req, res) => {
  console.log("READ CALLED, USER:", req.profile); 
  return res.json(req.profile);
};

// Middleware to fetch user by ID from URL param
exports.userByID = async (req, res, next, id) => {
  try {
    const user = await User.findById(id).select('-password');
    if (!user) return res.status(404).json({ error: 'User not found' });
    req.profile = user;
    next();
  } catch (err) {
    res.status(400).json({ error: 'Could not retrieve user' });
  }
};
