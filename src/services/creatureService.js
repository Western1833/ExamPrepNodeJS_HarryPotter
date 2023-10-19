const Creature = require('../models/Creature.js');

exports.createCreature = (creatureData) => Creature.create(creatureData);

exports.getAll = () => Creature.find();