import { Link } from "react-router-dom"
import { useJwt } from 'react-jwt'
import Cookies from 'universal-cookie'

export function NewsCard({
    news
}) {
    let cookies = new Cookies();
    let authCookie = cookies.get('auth_cookie');
    const { decodedToken } = useJwt(authCookie);
    let userFullName = decodedToken?.firstName + ' ' + decodedToken?.lastName;
    return (
        <div className="column">
            <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                    <Link to={`/news/details/${news._id}`}> <img src={news.image} alt="News" className="img-responsive" /></Link>
                </div>
                <div className="wsk-cp-text">
                    <div className="category">
                        <span><Link to={`/news/details/${news._id}`}>Read more</Link></span>
                    </div>
                    <div className="title-product">
                        <h3>{news.title}</h3>
                    </div>
                    <div className="description-prod">
                        <p>{news.createdAt}</p>
                    </div>
                    <div className="card-footer">
                        <div className="wcf-left"><span className="price">Author: {userFullName} </span></div>
                    </div>
                </div>
            </div>
        </div>
    )
}