const express = require('express');
const router = express.Router();
const ctrl = require('../controllers/project.controller');
const { requireSignin, isAdmin } = require('../middleware/auth');

router.get('/', ctrl.findAll);
router.get('/:id', ctrl.findOne);

router.post('/', requireSignin, isAdmin, ctrl.create);
router.put('/:id', requireSignin, isAdmin, ctrl.update);
router.delete('/:id', requireSignin, isAdmin, ctrl.deleteOne);
router.delete('/', requireSignin, isAdmin, ctrl.deleteAll);

module.exports = router;
