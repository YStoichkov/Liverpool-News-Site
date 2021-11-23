import { useHistory } from 'react-router-dom'
// import * as authService from '../../server/services/authService.js';

export function Register() {
    const historyHook = useHistory();

    const onRegisterHandler = (e) => {
        e.preventDefault();
        try {
            const formData = new FormData(e.currentTarget);

            let firstName = formData.get('firstName');
            let lastName = formData.get('lastName');
            let email = formData.get('email');
            let password = formData.get('password');

            let user = {
                firstName,
                lastName,
                email,
                password,
            }
            fetch(`http://localhost:3001/register`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json',
                    'Access-Control-Allow-Origin': '*'
                },
                body: JSON.stringify(user)
            }).then(res => {
                historyHook.push('/login');
            })
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
                            <span>If you already have profile click <a href="#">here</a></span>
                        </p>
                    </div>
                </form>
            </section>
        </>
    );
};