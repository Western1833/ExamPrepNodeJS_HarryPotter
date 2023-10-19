const router = require('express').Router();
const {createCreature, getAll, singleCreature, editCreature, deleteCreture, getMyCreatures} = require('../services/creatureService.js');

router.get('/all', async (req, res) => {
    const creatures = await getAll().lean();

    res.render('post/all-posts', {creatures});
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

router.get('/profile', async (req, res) => {
    const {user} = req;

    const myCreatures = await getMyCreatures(user?._id).lean();

    res.render('post/my-posts', {myCreatures});
});

router.get('/:creatureId/details', async (req, res) => {
    const {creatureId} = req.params;

    const creature = await singleCreature(creatureId).lean();
    const {user} = req;
    const {owner} = creature;
    
    const isOwner = user?._id === owner.toString();
    res.render('post/details', {creature, isOwner});
    
});

router.get('/:creatureId/edit', async (req, res) => {
    const {creatureId} = req.params;
    const creature = await singleCreature(creatureId).lean();

    res.render('post/edit', {creature});
});

router.post('/:creatureId/edit', async (req, res) => {
    const {creatureId} = req.params;

    const {name, species, skinColor, eyeColor, image, description} = req.body;
    const payload = {name, species, skinColor, eyeColor, image, description, owner: req.user};

    await editCreature(creatureId, payload);

    res.redirect(`/posts/${creatureId}/details`);
});

router.get('/:creatureId/delete', async (req, res) => {
    const {creatureId} = req.params;

    await deleteCreture(creatureId);

    res.redirect('/posts/all');
});

module.exports = router;