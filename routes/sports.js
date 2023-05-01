const express = require('express');

const sportController = require('../controllers/sportController');

const router = express.Router();

router.get('/',sportController.sportsTypeRender);
router.get('/:type',sportController.sportsRender);

module.exports = router;