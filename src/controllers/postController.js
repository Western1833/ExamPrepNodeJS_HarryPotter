const router = require('express').Router();
const {createCreature, getAll} = require('../services/creatureService.js');

router.get('/all', async (req, res) => {
    const creatures = await getAll().lean();
    const id = req.user._id;
    console.log(id)

    res.render('post/all-posts', {creatures}, id);
});

router.get('/create', (req, res) => {
    res.render('post/create');
});

router.post('/create', async (req, res) => {
    const {name, species, skinColor, eyeColor, image, description} = req.body;
    const payload = {name, species, skinColor, eyeColor, image, description, owner: req.user};
    
    await createCreature(payload);
    res.redirect('/posts/all');
});

router.get('/profile', (req, res) => {
    res.render('post/my-posts');
});

router.get('/')

module.exports = router;