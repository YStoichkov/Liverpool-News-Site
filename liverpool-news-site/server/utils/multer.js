let multer = require('multer');

const imageUploadPath = `C:/Users/ystoi/Desktop/Liverpool News Site/Liverpool-News-Site/liverpool-news-site/server/uploaded_files`
let storage = multer.diskStorage({
    destination: function (req, file, cb) {
        cb(null, imageUploadPath)
    },
    filename: function (req, file, cb) {
        cb(null, file.originalname);
    }
})

let upload = multer({ storage: storage });

module.exports = upload;