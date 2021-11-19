import { NavLink } from 'react-router-dom'

export function Navigation() {

    return (
        <nav className="main-nav overlay clearfix">
            <NavLink className="blog-logo" to="/"><img src="/img/navbar-logo.jpg" alt="Fashion Critiques" /></NavLink>
            <ul id="menu">
                <li className="nav-home nav-current" role="presentation"><NavLink to="/news">News</NavLink></li>
                <li className="nav-home nav-current" role="presentation"><NavLink to="/players">Players</NavLink></li>
                <li className="nav-article-example" role="presentation"><NavLink to="/gallery">Gallery</NavLink></li>
                <li className="nav-article-example" role="presentation"><NavLink to="/contact-us">Contacts</NavLink></li>
                <li className="nav-about-us" role="presentation"><NavLink to="/login">Login</NavLink></li>
                <li className="nav-author-page" role="presentation"><NavLink to="/register">Register</NavLink></li>
                <li className="nav-author-page" role="presentation"><NavLink to="/logout">Logout</NavLink></li>
                <span className="socialheader">
                    <a href="#"><span className='symbol'>circletwitterbird</span></a>
                    <a href="#"><span className='symbol'>circlefacebook</span></a>
                    <a href="#"><span className='symbol'>circlegoogleplus</span></a>
                    <a href="mailto:wowthemesnet@gmail.com"><span className='symbol'>circleemail</span></a>
                </span>
            </ul>
        </nav>
    )
}