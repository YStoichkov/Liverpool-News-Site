const router = require('express').Router();
const { cloudinary } = require('../utils/cloudinary.js');

router.get('/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:react-images')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();
    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
});

router.post('/upload', async (req, res) => {
    try {
        const fileStr = req.body.data;
        const uploadedResponse = await cloudinary.uploader.upload(fileStr, {
            upload_preset: 'react_app'
        });
        res.json({ msg: 'YES' });
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;