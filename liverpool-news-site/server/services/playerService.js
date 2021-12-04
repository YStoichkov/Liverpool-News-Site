const Player = require('../models/Player.js');

exports.create = (playerData) => Player.create(playerData);
exports.getAll = () => Player.find().lean();
exports.getOne = (playerId) => Player.findById(playerId);
exports.updateOne = (playerId, playerData) => Player.findByIdAndUpdate(playerId, playerData, { runValidators: true })

exports.deleteOne = (playerId) => Player.findByIdAndDelete(playerId);