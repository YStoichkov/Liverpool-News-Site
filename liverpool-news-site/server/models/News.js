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
    creator: {
        type: mongoose.Types.ObjectId,
        ref: 'User'
    },
    image: {
        type: String,
        required: true
    },
    peopleLikedOrDisliked: [
        {
            type: mongoose.Types.ObjectId,
            ref: 'User'
        }
    ],
    likes: {
        type: Number,
        default: 0
    },
    dislikes: {
        type: Number,
        default: 0
    }
}, { timestamps: true });


newsSchema.virtual('imgSrc').get(function () {
    let result = this.image.toString('base64');
    result = result.replace('dataimage/pngbase64', '');
    if (this.image != null && this.imgType != null) {

        return `data:${this.imgType};base64,${result}`
    }
})
newsSchema.set('toJSON', { getters: true });
const News = mongoose.model('News', newsSchema);

module.exports = News;