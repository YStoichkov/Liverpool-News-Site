const express = require('express');
const cors = require('cors');

const app = express();
const { cloudinary } = require('./utils/cloudinary.js');

app.use(express.json({ limit: '50mb' }));
app.use(express.urlencoded({ limit: '50mb', extended: true }));
app.use(cors());

app.get('/gallery/images', async (req, res) => {
    const { resources } = await cloudinary.search
        .expression('folder:react-images')
        .sort_by('public_id', 'desc')
        .max_results(30)
        .execute();
    const publicIds = resources.map((file) => file.public_id);
    res.send(publicIds);
})

app.post('/gallery/upload', async (req, res) => {
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
app.listen(process.env.SERVER_PORT, () => {
    console.log(`Server listening on port ${process.env.SERVER_PORT}`);
})