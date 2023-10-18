const router = require('express').Router();
const {register, login} = require('../services/userService.js');
const {extractErrorMessages} = require('./../utils/errorHandler.js');

router.get('/register', (req, res) => {
    res.render('user/register');
});

router.post('/register', async (req, res) => {
    const {firstName, lastName, email, password, repeatPassword} = req.body;

    try{
        await register({firstName, lastName, email, password, repeatPassword});
        res.redirect('/users/login');
    }catch(err){
        const errorMessages = extractErrorMessages(err);
        res.status(404).render('user/register', {errorMessages});
    }
});

router.get('/login', (req, res) => {
    res.render('user/login');
});

router.post('/login', async (req, res) => {
    const {email, password} = req.body;

    try{
        const token = await login(email, password);
        res.cookie('token', token, {httpOnly: true});

        res.redirect('/');
    }catch(err){
        const errorMessages = extractErrorMessages(err);
        res.status(404).render('user/login', {errorMessages});
    }
});

router.get('/logout', (req, res) => {
    res.clearCookie('token');
    res.redirect('/');
});

router.get('/users/create', (res, req) => {
    res.render('post/create');
});

module.exports = router;