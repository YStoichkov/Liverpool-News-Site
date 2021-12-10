const mongoose = require('mongoose');
const teamSchema = new mongoose.Schema({
    teamName: {
        type: String,
        required: true,
    },
    played: {
        type: Number,
        required: true,
    },
    wins: {
        type: Number,
        required: true,
    },
    draws: {
        type: Number,
        required: true,
    },
    loses: {
        type: Number,
        required: true,
    },
    goalsScored: {
        type: Number,
        required: true,
    },
    goalsAgainst: {
        type: Number,
        required: true,
    },
    difference: {
        type: Number,
        required: true,
    },
    points: {
        type: Number,
        required: true
    },
    position: {
        type: Number,
        required: true
    }
})

const Team = mongoose.model('Team', teamSchema);
module.exports = Team;
