const jwt = require('../utils/jwt.js');
const AUTH_COOKIE_NAME = process.env.AUTH_COOKIE_NAME;
const JWT_SECRET = process.env.JWT_SECRET;
// const postService = require('../services/postService.js');

exports.auth = function (req, res, next) {
    let token = req.cookies[AUTH_COOKIE_NAME];

    if (token) {
        jwt.verify(token, JWT_SECRET)
            .then(decodedToken => {
                req.user = decodedToken;
                res.locals.user = decodedToken;
                next();
            })
            .catch(err => {
                res.clearCookie(AUTH_COOKIE_NAME);
                res.redirect('/auth/login');
            })
    } else {
        next();
    }
}

exports.isAuth = function (req, res, next) {
    if (req.user) {
        next();
    } else {
        res.redirect('/auth/login');
    }
}

exports.isGuest = function (req, res, next) {
    if (!req.user) {
        next();
    } else {
        res.redirect('/');
    }
}
// exports.isCreator = async function (req, res, next) {
//     let post = await postService.getOne(req.params.postId);
//     if (post.author == req.user?._id) {
//         next();
//     } else {
//         res.redirect(`/posts/${req.params.postId}/details`);
//     }
// }

// exports.notAuthor = async function (req, res, next) {
//     let post = await postService.getOne(req.params.postId);
//     if (post.author != req.user?._id) {
//         next();
//     } else {
//         res.redirect(`/posts/${req.params.postId}/details`);
//     }
// }