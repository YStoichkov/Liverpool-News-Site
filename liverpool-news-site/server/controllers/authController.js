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
        // res.cookie(AUTH_COOKIE_NAME, token);

        res.status(200).json({ AUTH_COOKIE_NAME: token });
    } catch (error) {
        console.log(error);
    }
})

router.post('/register', async (req, res) => {
    try {
        let { firstName, lastName, email, password, rePassword } = req.body;
        if (password != rePassword) {
            let errors = ['Passwords should match'];
        }
        await authService.register({
            firstName,
            lastName,
            email,
            password,
        })
        // let token = await authService.login({
        //     firstName,
        //     lastName,
        //     email,
        //     password,
        // });
        // res.cookie(AUTH_COOKIE_NAME, token);
        res.json({ msg: 'YES' })
    } catch (error) {
        console.log(error)
    }
})

module.exports = router;