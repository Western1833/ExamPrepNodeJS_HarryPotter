const router = require('express').Router();
const homeController = require('./controllers/homeController.js');

//Home controller routes
router.use(homeController);

module.exports = router;