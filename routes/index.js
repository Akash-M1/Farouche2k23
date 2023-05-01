const express = require('express');

const homeController = require('../controllers/homeController');

const router = express.Router();

router.get('/',homeController.homePageRender);
router.use('/event-updates',require('./eventUpdates'));
router.use('/sports',require('./sports'));
router.use('/cultural',require('./cultural'))
router.use('/about-us',require('./aboutUs'));
router.use('/register',require('./register'));
router.use('/*',homeController.allPageRender);

module.exports = router;