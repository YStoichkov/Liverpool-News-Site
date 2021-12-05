import { useState } from 'react'
import { useHistory, Link } from 'react-router-dom'
import * as authService from '../../services/authService.js'
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext } from 'react'

const Login = () => {
  const { login } = useContext(AuthContext);
  const [isValid, setValid] = useState(false)
  const historyHook = useHistory();
  // const cookies = new Cookies();

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);
      let email = formData.get('email');
      let password = formData.get('password');

      if (email !== '' && password !== '') {
        authService.login({ email, password })
          .then(result => {
            let payload = Object.values(result)[0];
            login(payload)
            historyHook.push('/');
          })
      } else {
        setValid(true);
      }
    } catch (error) {
      console.log(error.message)
    }
  }

  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section id="login-page" className="content auth" method="POST" >
        <form id="login" onSubmit={onLoginHandler}>
          <div className="container">
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="email@email.com" />
            {isValid && <span style={{ color: 'red' }}>Invalid email</span>}
            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" placeholder="******" />
            {isValid && <span style={{ color: 'red' }}>Invalid password</span>}
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

export default Login;