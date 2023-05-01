const express = require('express');

const registerController = require('../controllers/registerController');

const router = express.Router();

router.post('/',registerController.createRegistration);
router.get('/sports/:sport',registerController.sportRegisterPageRender);
router.get('/cultural/:cultural',registerController.culturalRegisterPageRender);

module.exports = router;