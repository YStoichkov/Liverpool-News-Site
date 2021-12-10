import { useHistory, Link } from 'react-router-dom'
import { useState } from 'react'
import * as authService from '../../services/authService.js'
import { notAuth } from '../../hoc/isAuth.js'

const Register = () => {
    const [notValid, setNotValid] = useState(false)
    const [notValidInput, setNotValidInput] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    const [inputError, setInputError] = useState('');
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
                rePass
            }
            if (firstName !== '' && lastName !== '' && email !== '' && password !== '' && password !== '' && rePass !== '') {
                authService.register(user)
                    .then(res => {
                        if (res.statusCode === 200) {
                            historyHook.push('/login')
                        } else {
                            setErrorMessage(res.message);
                            setNotValid(true);
                        }
                    })
                    .catch(err => {
                        setErrorMessage(err.message)
                        setNotValid(true);
                    })
            } else {
                setInputError(`Invalid input.Try again.`)
                setNotValidInput(true);
            }
        } catch (error) {
            setErrorMessage(error.message)
            setNotValid(true);
        }
    }
    return (
        <>
            <section id="register-page" className="content auth" method="POST">
                <form id="register" onSubmit={onRegisterHandler}>
                    <div className="container">
                        <h1>Register</h1>
                        <p className="errorField">
                            {notValid && <span>{errorMessage}</span>}
                        </p>
                        <p className="errorField">
                            {notValidInput && <span>{inputError}</span>}
                        </p>
                        <label htmlFor="firstName">First Name:</label>
                        <input type="text" id="firstName" name="firstName" placeholder="Yanko" />
                        <label htmlFor="lastName">Last Name:</label>
                        <input type="text" id="lastName" name="lastName" placeholder="Stoichkov" />
                        <label htmlFor="email">Email:</label>
                        <input type="email" name="email" id="email" placeholder="email@email.com" />
                        <label htmlFor="password">Password:</label>
                        <input type="password" name="password" id="password" placeholder="******" />
                        <label htmlFor="rePass">Confirm Password:</label>
                        <input type="password" name="rePass" id="rePass" placeholder="******" />
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

export default notAuth(Register);
