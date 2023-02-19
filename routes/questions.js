const express = require('express');
const router = express.Router();
const questionController = require('../controller/questions');
const optionController = require('../controller/options');
router.post('/create', questionController.create);
router.post('/:id', questionController.show);
router.post('/:id/options/create', optionController.create);
router.post('/:id/delete', questionController.destroy);
module.exports = router;