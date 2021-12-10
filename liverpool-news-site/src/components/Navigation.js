import { NavLink } from 'react-router-dom'
import { AuthContext } from '../contexts/AuthContext.js';
import { useContext } from 'react'

export function Navigation() {
    const { user } = useContext(AuthContext);
    let userNavigation = (
        <>
            <li className="nav-home nav-current" role="presentation"><NavLink to="/news/all">News</NavLink></li>
            <li className="nav-home nav-current" role="presentation"><NavLink to="/players/all">Players</NavLink></li>
            <li className="nav-article-example" role="presentation"><NavLink to="/gallery">Gallery</NavLink></li>
            <li className="nav-article-example" role="presentation"><NavLink to="/contact-us">Contacts</NavLink></li>
            <li className="nav-author-page" role="presentation"><NavLink to="/logout" >Logout</NavLink></li>
        </>
    )

    let guestNavigation = (
        <>
            <li className="nav-about-us" role="presentation"><NavLink to="/login">Login</NavLink></li>
            <li className="nav-author-page" role="presentation"><NavLink to="/register">Register</NavLink></li>
        </>
    )

    return (
        <>
            <nav className="main-nav overlay clearfix">
                <NavLink className="blog-logo" to="/"><img src="/img/navbar-logo.jpg" alt="Fashion Critiques" /></NavLink>
                <ul id="menu">
                    {user.AUTH_COOKIE_NAME ?
                        userNavigation :
                        guestNavigation
                    }
                </ul>
            </nav >
        </>
    )
}