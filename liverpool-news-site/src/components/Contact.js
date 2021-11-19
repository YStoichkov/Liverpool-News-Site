export function Contact() {
    const labelStyle = {
        color: 'white'
    };

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <section id="contactUs-page" className="content auth">
                <form id="contact-form">
                    <div className="container">
                        <h1>Contact Us</h1>
                        <label htmlFor="email">Your Email:</label>
                        <input type="email" id="email" name="email" placeholder="maria@email.com" />
                        <label htmlFor="pass">Subject:</label>
                        <input type="password" name="password" id="register-password" />
                        <label htmlFor="con-pass">Your Message:</label>
                        <textarea name="confirm-password" id="confirm-password" rows="15"></textarea>
                        <input className="btn submit" type="submit" value="Contact Us" />
                    </div>
                </form>
            </section>
        </>
    )
}