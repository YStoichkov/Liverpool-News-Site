const News = require('../models/News.js');

exports.create = (newsData) => News.create(newsData);
exports.getAll = () => News.find().lean();
exports.getOne = (newsId) => News.findById(newsId);
exports.updateOne = (newsId, newsData) => News.findByIdAndUpdate(newsId, newsData, { runValidators: true });
exports.deleteOne = (newsId) => News.findByIdAndDelete(newsId);
exports.getLatest = () => News.find({}).sort({ _id: -1 }).limit(3).lean();
exports.upVote = (newsId, userId) => News.findOneAndUpdate({ _id: newsId }, { $push: { peopleLikedOrDisliked: userId }, $inc: { likes: 1 } }, { runValidators: true });
exports.downVote = (newsId, userId) => News.findOneAndUpdate({ _id: newsId }, { $push: { peopleLikedOrDisliked: userId }, $inc: { dislikes: -1 } }, { runValidators: true });
