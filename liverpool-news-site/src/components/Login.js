export function Login() {
  return (
    <>
      <br />
      <br />
      <br />
      <br />
      <section id="login-page" className="content auth">
        <form id="login">
          <div className="container">
            <h1>Login</h1>
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Sokka@gmail.com" />

            <label htmlFor="login-pass">Password:</label>
            <input type="password" id="login-password" name="password" />
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