import { useHistory, Link } from 'react-router-dom'
import { useState } from 'react'
import * as authService from '../../services/authService.js'

export function Register() {
    const [notValid, setValid] = useState(false)
    const historyHook = useHistory();
    const onRegisterHandler = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);
            let { firstName, lastName, email, password, rePass } = Object.fromEntries(formData);
            let user = {
                firstName,
                lastName,
                email,
                password,
            }
            if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && password == rePass) {
                authService.register(user)
                    .then(res => {
                        historyHook.push('/login');
                    })
            } else {
                setValid(true);
            }
        } catch (error) {
            console.error(error);
        }
    }
    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <section id="register-page" className="content auth" method="POST">
                <form id="register" onSubmit={onRegisterHandler}>
                    <div className="container">
                        <h1>Register</h1>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Yanko" />
                        {notValid && <span style={{ color: 'red' }}>Invalid First Name</span>}
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Stoichkov" />
                        {notValid && <span style={{ color: 'red' }}>Invalid Last Name</span>}
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="email@email.com" />
                        {notValid && <span style={{ color: 'red' }}>Invalid email</span>}
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="******" />
                        {notValid && <span style={{ color: 'red' }}>Invalid password</span>}
                        <label htmlFor="rePass">Confirm Password:</label>
                        <input type="password" name="rePass" id="rePass" placeholder="******" />
                        {notValid && <span style={{ color: 'red' }}>Invalid password</span>}
                        <input className="btn submit" type="submit" value="Register" />
                        <p className="field">
                            <span>If you already have profile click <Link to="/login">here</Link></span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
};