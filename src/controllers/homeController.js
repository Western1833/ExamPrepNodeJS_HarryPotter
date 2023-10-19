const router = require('express').Router();
const {getAll} = require('../services/creatureService.js');

router.get('/', async (req, res) => {
    const creatures = await getAll().lean();
    console.log({creatures})
    res.render('home', {creatures});
});

router.get('/404', (req, res) => {
    res.render('404');
});

module.exports = router;