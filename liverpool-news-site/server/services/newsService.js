const News = require('../models/News.js');

exports.create = (newsData) => News.create(newsData);
exports.getAll = () => News.find().lean();
exports.getOne = (newsId) => News.findById(newsId);
exports.updateOne = (newsId, newsData) => News.findByIdAndUpdate(newsId, newsData, { runValidators: true });
exports.deleteOne = (newsId) => News.findByIdAndDelete(newsId);
exports.getLatest = () => News.find({}).sort({ _id: -1 }).limit(3).lean();
