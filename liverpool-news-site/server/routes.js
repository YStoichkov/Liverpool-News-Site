const router = require('express').Router();
// const homeController = require('./controllers/homeController.js');
const galleryController = require('./controllers/galleryController.js');
const authController = require('./controllers/authController.js');

// router.use(homeController);
router.use(authController)
router.use('/gallery', galleryController)
router.use('*', (req, res) => {
    res.json('Error');
})

module.exports = router;