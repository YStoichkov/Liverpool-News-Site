const router = require('express').Router();
const newsService = require('../services/newsService.js')

router.post('/add', async (req, res) => {
    try {
        const { title, content, image, userId } = req.body
        const news = {
            title,
            content,
            image,
            creator: userId,
        };
        await newsService.create(news);
        res.status(200).json('ok');
    } catch (err) {
        res.status(404).json('error');
    }
})
router.get('/all', async (req, res) => {
    let result = await newsService.getAll();
    res.send(result);
})

router.get('/details/:newsId', async (req, res) => {
    try {
        let newsId = req.params.newsId;
        let news = await newsService.getOne(newsId);
        res.status(200).send(news);
    } catch (err) {
        res.status(404).json('error');
    }
})

router.post('/edit/:newsId', async (req, res) => {
    try {
        let { title, content, image } = req.body;
        let newsId = req.params.newsId;
        await newsService.updateOne(newsId, { title, content, image })
        res.status(200).json('ok');
    } catch (error) {
        res.status(404).json('error')
    }
})

router.post('/delete/:newsId', async (req, res) => {
    try {
        let { userId, newsId } = req.body;
        //TODO: .... if current user is creator of the news delete it 
        await newsService.deleteOne(newsId);
        res.status(200).json('ok');
    } catch (error) {
        res.status(404).json('error');
    }
})

router.get('/latest', async (req, res) => {
    let result = await newsService.getLatest();
    res.send(result);
})

module.exports = router;