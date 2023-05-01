const express = require('express');

const culturalController = require('../controllers/culturalController');

const router = express.Router();

router.get('/',culturalController.culturalTypeRender);
router.get('/:type',culturalController.culturalRender);

module.exports = router;