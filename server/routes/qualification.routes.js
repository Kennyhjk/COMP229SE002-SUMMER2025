const express    = require('express');
const router     = express.Router();
const ctrl       = require('../controllers/qualification.controller');

router.get('/', ctrl.findAll);
router.get('/:id', ctrl.findOne);
router.post('/', ctrl.create);
router.put('/:id', ctrl.update);
router.delete('/:id', ctrl.deleteOne);
router.delete('/', ctrl.deleteAll);

module.exports = router;
