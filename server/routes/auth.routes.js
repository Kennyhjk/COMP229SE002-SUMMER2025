const express  = require('express');
const router   = express.Router();
const authCtrl = require('../controllers/auth.controller.js');
const userCtrl = require('../controllers/user.controller.js');

// POST /api/auth/signup
router.post('/signup', authCtrl.signUp);

// POST /api/auth/signin
router.post('/signin', authCtrl.signIn);

// GET /api/auth/signout
router.get('/signout', authCtrl.signOut);

// GET /api/auth/me/:userId 
router.get(
  '/me/:userId',
  authCtrl.requireSignin,
  authCtrl.hasAuthorization,
  userCtrl.read
);

router.param('userId', userCtrl.userByID);

module.exports = router;
