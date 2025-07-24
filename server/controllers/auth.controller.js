const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const User = require('../models/user.model.js');

// Sign-up
exports.signUp = async (req, res) => {
  try {
    const user = new User(req.body);
    await user.save();
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    return res.status(201).json({ token });
  } catch (err) {
    return res.status(400).json({ error: err.message });
  }
};

// Sign-in
exports.signIn = async (req, res) => {
  try {
    const { email, password } = req.body;
    const user = await User.findOne({ email });
    if (!user) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      return res.status(401).json({ error: 'Invalid credentials' });
    }
    const token = jwt.sign(
      { id: user._id },
      process.env.JWT_SECRET,
      { expiresIn: '1h' }
    );
    return res.json({ token });
  } catch (err) {
    return res.status(500).json({ error: err.message });
  }
};

// Require Signin middleware
exports.requireSignin = (req, res, next) => {
  const authHeader = req.headers.authorization || '';
  const token = authHeader.split(' ')[1];
  if (!token) return res.status(401).json({ error: 'No token provided' });

  jwt.verify(token, process.env.JWT_SECRET, (err, decoded) => {
    if (err) return res.status(401).json({ error: 'Invalid token' });
    req.auth = decoded; // decoded.id = user._id
    next();
  });
};

// Has Authorization middleware
exports.hasAuthorization = (req, res, next) => {
  const authorized =
    req.profile &&
    req.auth &&
    req.profile._id.toString() === req.auth.id;
  if (!authorized) {
    return res.status(403).json({ error: 'Access denied' });
  }
  next();
};

// Sign-out
exports.signOut = (req, res) => {
  res.clearCookie("token"); 
  return res.status(200).json({ message: "Signed out successfully" });
};
