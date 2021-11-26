const mongoose = require('mongoose');

const playerSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        validate: /^[A-Za-z]/,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 3,
        validate: /^[A-Za-z]/,
    },
    position: {
        type: String,
        required: true,
        minlength: 5,
        validate: /^[A-Za-z]/,
    },
    shirtNumber: {
        type: Number,
        min: 0,
        required: true,
    },
    dateOfBirth: {
        type: Date,
        required: true,
        min: '1971-01-01',
        max: '2007-01-02'
    },
    description: {
        type: String,
        required: true,
        minlength: 30,
    },
    signed: {
        type: Date,
        required: true,
    },
    apperances: {
        type: Number,
        required: true,
    },
    goals: {
        type: Number,
    },
    addedByUser: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    playerImage: {
        type: String,
        required: true
    }
})

const Player = mongoose.model('Player', playerSchema);

module.exports = Player;