const mongoose = require('mongoose');
const bcrypt = require('bcrypt');
const { SALT_ROUNDS } = require('../constants.js');

const userSchema = new mongoose.Schema({
    firstName: {
        type: String,
        required: true,
        minlength: 3,
        validate: /^[A-Za-z]/,
    },
    lastName: {
        type: String,
        required: true,
        minlength: 5,
        validate: /^[A-Za-z]/,
    },
    email: {
        type: String,
        required: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 4,
    },
    myNews: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'News'
        }
    ]
})

userSchema.pre('save', function (next) {
    return bcrypt.hash(this.password, SALT_ROUNDS)
        .then((hash) => {
            this.password = hash;

            return next();
        })
})

userSchema.method('validatePassword', function (password) {
    return bcrypt.compare(password, this.password);
})

const User = mongoose.model('User', userSchema);

module.exports = User;