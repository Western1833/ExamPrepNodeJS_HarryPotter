const router = require('express').Router();
const homeController = require('./controllers/homeController.js');
const userController = require('./controllers/userController.js');

//Home controller routes
router.use(homeController);

//User controller routes
router.use('/users', userController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;