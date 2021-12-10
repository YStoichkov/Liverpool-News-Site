const router = require('express').Router();
const authService = require('../services/authService.js');
const { isGuest, isAuth } = require('../middlewares/authMiddleware.js');
const { AUTH_COOKIE_NAME } = require('../constants.js')

router.post('/login', isGuest, async (req, res) => {
    try {
        let { email, password } = req.body;
        let token = await authService.login({
            email,
            password,
        });
        res.status(200).json({ statusCode: 200, AUTH_COOKIE_NAME: token });
    } catch (error) {
        res.send({ message: error.message, statusCode: 403 });
    }
})

router.post('/register', async (req, res) => {
    try {
        let errors = [];
        let { firstName, lastName, email, password, rePass } = req.body;
        if (password != rePass) {
            errors.push('Passwords should match')
        }
        if (firstName.length < 3) {
            errors.push('First name must be more than 3 characters.')
        }
        if (lastName.length < 3) {
            errors.push('Last name must be more than 5 characters.')
        }
        if (password.length < 6) {
            errors.push('Password must be more than 6 characters.')
        }
        if (errors.length != 0) {
            return res.send({ message: errors.join(', '), statusCode: 403 })
        }
        await authService.register({
            firstName,
            lastName,
            email,
            password,
        })
        res.json({ message: 'OK', statusCode: 200 })
    } catch (error) {
        res.send({ message: error.message, statusCode: 403 });
    }
})

router.get('/user/:userId', async (req, res) => {
    try {
        let userId = req.params.userId
        let user = await authService.getUser(userId);
        res.status(200).json(user);
    } catch (error) {
        res.status(404).json('error');
    }
})
module.exports = router;