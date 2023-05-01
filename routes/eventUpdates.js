const express = require('express');

const eventUpdatesController = require('../controllers/eventUpdatesController');

const router = express.Router();

router.get('/',eventUpdatesController.eventUpdatesPageRender);

module.exports = router;