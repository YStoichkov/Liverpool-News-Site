import { Link } from "react-router-dom"

export function LatestNews({
    latestNews
}) {
    return (
        <div className="column">
            <div className="wsk-cp-product">
                <div className="wsk-cp-img">
                    <Link to={`/news/details/${latestNews._id}`}> <img src={latestNews.image} alt="News" className="img-responsive" /></Link>
                </div>
                <div className="wsk-cp-text">
                    <div className="category">
                        <span><Link to={`/news/details/${latestNews._id}`}>Read more</Link></span>
                    </div>
                    <div className="title-product">
                        <h3>{latestNews.title}</h3>
                    </div>
                    <div className="description-prod">
                        <p>{latestNews.createdAt}</p>
                    </div>
                </div>
            </div>
        </div>
    )
}
