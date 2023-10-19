const router = require('express').Router();
const homeController = require('./controllers/homeController.js');
const userController = require('./controllers/userController.js');
const postController = require('./controllers/postController.js');

//Home controller routes
router.use(homeController);

//User controller routes
router.use('/users', userController);
router.use('/posts', postController);

router.get('*', (req, res) => {
    res.redirect('/404');
})

module.exports = router;