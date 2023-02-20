const express = require('express');
const router = express.Router();
const optionsController = require('../controller/options'); // importing the options controller 
router.post('/:id/delete', optionsController.destroy); // passing the option delete controller
router.post('/:id/add_vote', optionsController.vote); // passing the add vote controller
module.exports = router;