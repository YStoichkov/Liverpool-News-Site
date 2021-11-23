const mongoose = require('mongoose');

const newsSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
        minlength: 5
    },
    content: {
        type: String,
        required: true,
        minlength: 30
    },
    image: {
        type: mongoose.Types.ObjectId,
        ref: 'Image',
    },
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    timestamps: true,
});


const News = mongoose.model('News', newsSchema);

module.exports = News;