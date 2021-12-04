import ReCAPTCHA from "react-google-recaptcha";
import { useState } from "react";
import axios from 'axios'
import { useHistory } from 'react-router-dom'

export function Contact() {
    const historyHook = useHistory();
    const [isVerified, setVerification] = useState(false);
    const handleOnChange = (value) => {
        setVerification(true);
    }
    const onSubmitHandler = (e) => {
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        const { email, subject, message } = Object.fromEntries(formData);
        const emailToSend = {
            email,
            subject,
            message
        }
        axios.post(`http://localhost:3001/email/send`, emailToSend).then(res => {
            if (res.status === 200) {
                historyHook.push('/');
            }
        })
    }
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <section id="contactUs-page" className="content auth" method="POST">
                <form id="contact-form" onSubmit={onSubmitHandler}>
                    <div className="container">
                        <h1>Contact Us</h1>
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" placeholder="maria@email.com" />
                        <label htmlFor="subject">Subject:</label>
                        <input type="text" name="subject" id="subject" />
                        <label htmlFor="message">Your Message:</label>
                        <textarea name="message" id="message" rows="15"></textarea>
                        <ReCAPTCHA
                            sitekey={process.env.REACT_APP_GOOGLE_RECAPTCHA_v2}
                            onChange={handleOnChange}
                        />
                        <input className="btn submit" type="submit" value="Contact Us" disabled={!isVerified} />
                    </div>
                </form>
            </section>
        </>
    )
}