const express = require('express');
const router = express.Router();
const optionsController = require('../controller/options');
router.post('/:id/delete', optionsController.destroy);
router.post('/:id/add_vote', optionsController.vote);
module.exports = router;