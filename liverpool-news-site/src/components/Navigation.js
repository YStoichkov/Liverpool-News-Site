export function Navigation() {
    return (
        <nav className="main-nav overlay clearfix">
            <a className="blog-logo" href="index.html"><img src="/img/navbar-logo.jpg" alt="Fashion Critiques" /></a>
            <ul id="menu">
                <li className="nav-home nav-current" role="presentation"><a href="index.html">News</a></li>
                <li className="nav-article-example" role="presentation"><a href="article.html">Gallery</a></li>
                <li className="nav-about-us" role="presentation"><a href="about.html">Login</a></li>
                <li className="nav-author-page" role="presentation"><a href="author.html">Register</a></li>
                <li className="nav-author-page" role="presentation"><a href="author.html">Logout</a></li>
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