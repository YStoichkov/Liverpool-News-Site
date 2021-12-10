import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext } from 'react'
import { notAuth } from '../../hoc/isAuth.js'

const Login = () => {
  const { login } = useContext(AuthContext);
  const [notValid, setNotValid] = useState(false)
  const [errorMessage, setErrorMessage] = useState('')
  const historyHook = useHistory();

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      let email = formData.get('email');
      let password = formData.get('password');
      if (email !== '' && password !== '') {
        authService.login({ email, password })
          .then(result => {
            // let payload = Object.values(result)[0];
            if (result.statusCode === 200) {
              login(result)
              historyHook.push('/');
            } else {
              setErrorMessage(result.message)
              setNotValid(true);
            }
          })
      } else {
        setErrorMessage(`Invalid input`)
        setNotValid(true);
      }
    } catch (error) {
      setErrorMessage(error.message)
      setNotValid(true);
    }
  }

  return (
    <>
      <br />
      <section id="login-page" className="content auth" method="POST" >
        <form id="login" onSubmit={onLoginHandler}>
          <div className="container">
            <h1>Login</h1>
            <p className="errorField">
              {notValid && <span>{errorMessage}</span>}
            </p>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="email@email.com" />
            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" placeholder="******" />
            <input type="submit" className="btn submit" value="Login" />
            <p className="field">
              <span>If you don't have profile click <Link to="/register">here</Link></span>
            </p>
          </div>
        </form>
      </section>
    </>
  )
}

export default notAuth(Login);