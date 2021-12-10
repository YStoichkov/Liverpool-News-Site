const jwt = require('../utils/jwt.js');
const User = require('../models/User.js');
const { JWT_SECRET } = require('../constants.js');

exports.login = async ({ email, password }) => {
    let user = await User.findOne({ email });
    if (!user) {
        throw new Error(`Invalid username or password`);
    }
    let isValid = await user.validatePassword(password);
    if (!isValid) {
        throw new Error(`Invalid username or password`);
    }
    let payload = {
        _id: user._id,
        firstName: user.firstName,
        lastName: user.lastName,
        email: user.email,
    };
    let token = await jwt.sign(payload, JWT_SECRET, { expiresIn: '2h' });
    return token;
}

exports.register = (userData) => User.create(userData);

exports.getUser = (userId) => User.findById(userId).lean();

exports.addNewsToUser = (userId, newsId) => User.findOneAndUpdate({ _id: userId }, { $push: { myNews: newsId } }, { runValidators: true });