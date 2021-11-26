const router = require('express').Router();
const Player = require('../models/Player.js');

router.post('/add', (req, res) => {
    console.log(req.body);
    // const { title, content, image, userId } = req.body
    // const news = {
    //     title,
    //     content,
    //     image,
    //     creator: userId,
    // };
    // News.create(news);
    // res.send('OK');
})


// router.get('/all', async (req, res) => {
//     let result = await News.find();
//     res.send(result);
// })

// router.get('/details/:newsId', async (req, res) => {
//     let newsId = req.params.newsId;
//     let news = await News.findById(newsId).lean();
//     res.send(news);
// })



module.exports = router;