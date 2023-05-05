const express = require('express');

const aboutUsController = require('../controllers/aboutUsController');

const router = express.Router();

router.get('/',aboutUsController.aboutUsRender);
router.get('/:role',aboutUsController.rolesPageRender);

module.exports = router;
