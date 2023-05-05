const express = require('express');

const eventUpdatesController = require('../controllers/eventUpdatesController');

const router = express.Router();

router.get('/',eventUpdatesController.eventUpdatesTypeRender);
router.get('/:status',eventUpdatesController.eventUpdatesStatusRender);
router.get('/:status/:type',eventUpdatesController.eventUpdatesRender);

module.exports = router;