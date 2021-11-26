import axios from "axios";
import { useEffect, useState } from "react";

export function SingleNews({ match, location, history }) {
    const [news, setNews] = useState({});

    const headerStyle = {
        backgroundImage: 'url(/img/background-image.jpg)',
        width: '100%',
    }
    const imageStyle = {
        width: '50%'
    }

    useEffect(async () => {
        let newsId = match.params.newsId;
        await fetch(`http://localhost:3001/news/details/${newsId}`)
            .then(res => res.json())
            .then(newsResult => {
                setNews(newsResult);
            })
    }, [])

    return (
        <>
            <header className="main-header post-head" style={headerStyle}>
                <img src={news.image} style={imageStyle} />
                <div className="vertical">
                    <div className="main-header-content inner">
                        <h1 className="post-title">{news.title}</h1>
                        <div className="entry-title-divider">
                            <span></span><span></span><span></span>
                        </div>
                        <section className="post-meta">
                            <time className="post-date" >{news.createdAt}</time> | <a className="scrolltocomments" href="#disqus_thread" />
                            <span>Author: </span>
                        </section>
                    </div>
                </div>
            </header>
            <main id="content" className="content" role="main">
                <div className="wraps">
                    <img src="/img/shadow.png" className="wrapshadow" />
                    <article className="post featured">
                        <section className="post-content">
                            <p>{news.content}</p>
                        </section>
                    </article>
                </div>
            </main>
        </>
    )
}