const router = require('express').Router();
const newsController = require('./controllers/newsController.js');
const galleryController = require('./controllers/galleryController.js');
const authController = require('./controllers/authController.js');
const playerController = require ('./controllers/playerController.js');

router.use('/news', newsController);
router.use(authController)
router.use('/gallery', galleryController)
router.use('/players', playerController)
router.use('*', (req, res) => {
    res.json('Error');
})

module.exports = router;