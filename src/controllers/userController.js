const router = require('express').Router();
const {register} = require('../services/userService.js');

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    const {firstName, lastName, email, password, repeatPassword} = req.body;
    await register({firstName, lastName, email, password, repeatPassword});
    res.redirect('/users/login');
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', (req, res) => {
    const {email, password} = req.body;
    res.redirect('/');
    console.log(req.body)
});

module.exports = router;