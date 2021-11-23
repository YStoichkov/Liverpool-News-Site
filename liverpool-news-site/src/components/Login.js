import { useHistory } from 'react-router-dom'
import Cookies from 'universal-cookie'

export function Login() {
  const historyHook = useHistory();
  const cookies = new Cookies();

  const onLoginHandler = async (e) => {
    e.preventDefault();
    try {
      const formData = new FormData(e.currentTarget);

      let email = formData.get('email');
      let password = formData.get('password');

      fetch(`http://localhost:3001/login`, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
          'Content-type': 'application/json',
        },
        body: JSON.stringify({ email, password })
      })
        .then(res => res.json())
        .then(result => {
          let payload = Object.values(result)[0];
          cookies.set('auth_cookie', payload, { path: '/' });
          historyHook.push('/');
        })
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

            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" placeholder="******" />
            <input type="submit" className="btn submit" value="Login" />
            <p className="field">
              <span>If you don't have profile click <a href="#">here</a></span>
            </p>
          </div>
        </form>
      </section>
    </>
  )
}