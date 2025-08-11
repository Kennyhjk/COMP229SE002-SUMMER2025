const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/qualification.controller');
const { requireSignin, isAdmin } = require('../controllers/auth.controller');

router.get('/', requireSignin, isAdmin, ctrl.findAll);
router.get('/:id', requireSignin, isAdmin, ctrl.findOne);

router.post('/', requireSignin, isAdmin, ctrl.create);
router.put('/:id', requireSignin, isAdmin, ctrl.update);
router.delete('/:id', requireSignin, isAdmin, ctrl.deleteOne);
router.delete('/', requireSignin, isAdmin, ctrl.deleteAll);

module.exports = router;
