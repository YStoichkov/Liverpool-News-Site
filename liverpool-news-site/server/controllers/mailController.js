const router = require('express').Router();
const sendgridEmail = require('@sendgrid/mail');

router.post('/send', async (req, res) => {
    try {
        sendgridEmail.setApiKey(process.env.SENDGRID_API_KEY);
        const { email, subject, message } = req.body;
        const emailToSend = {
            to: email,
            from: 'nelitoo.p22@gmail.com',
            subject: subject,
            html: `<p><strong>Message: ${message}</strong></p>`
        }
        sendgridEmail.send(emailToSend)
            .then(() => {
                res.status(200).json('ok');
            })
    } catch (error) {
        res.status(404).json('error');
    }
})


module.exports = router;