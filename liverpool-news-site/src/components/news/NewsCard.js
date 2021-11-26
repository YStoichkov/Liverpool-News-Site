import { Link } from "react-router-dom"

export function NewsCard({
    news
}) {
    return (
        <div className="grid-item">
            <article className="post">
                <Link to={`/news/details/${news._id}`}><img src={news.image} /></Link>
                <div className="wrapgriditem">
                    <header className="post-header">
                        <h2 className="post-title"><Link to={`/news/details/${news._id}`}>{news.title}</Link></h2>
                    </header>
                    <section className="post-excerpt">
                        <p>
                            {news.content} <a className="read-more" href="/this-is-a-test/">&raquo; </a>
                        </p>
                    </section>
                    <footer className="post-meta">
                        <time className="post-date" dateTime="2015-12-13">Created At: {news.createdAt}</time>
                    </footer>
                </div>
            </article>
        </div>
    )
}