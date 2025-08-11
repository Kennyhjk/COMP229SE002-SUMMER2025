const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/contact.controller');
const { requireSignin, isAdmin } = require('../controllers/auth.controller');

router.post('/', ctrl.create);

router.get('/', requireSignin, isAdmin, ctrl.findAll);
router.get('/:id', requireSignin, isAdmin, ctrl.findOne);
router.delete('/:id', requireSignin, isAdmin, ctrl.deleteOne);
router.delete('/', requireSignin, isAdmin, ctrl.deleteAll);

module.exports = router;
