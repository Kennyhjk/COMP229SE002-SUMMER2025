const express  = require('express');
const router   = express.Router();
const userCtrl = require('../controllers/user.controller.js');

router.route('/')
  .get(userCtrl.getAll)
  .post(userCtrl.create);

router.route('/:id')
  .get(userCtrl.getById)
  .put(userCtrl.update)
  .delete(userCtrl.remove);

router.param('id', userCtrl.userByID);

module.exports = router;
