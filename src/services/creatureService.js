const Creature = require('../models/Creature.js');

exports.createCreature = (creatureData) => Creature.create(creatureData);

exports.getAll = () => Creature.find();

exports.singleCreature = (creatureId) => Creature.findById(creatureId);

exports.editCreature = (creatureId, data) => Creature.findByIdAndUpdate(creatureId, data);

exports.deleteCreture = (creatureId) => Creature.findByIdAndDelete(creatureId);

exports.getMyCreatures = (ownerId) => Creature.find({owner: ownerId}).populate('owner');