import { NavLink } from "react-router-dom"
import { useState, useEffect } from 'react'
import { NewsCard } from './NewsCard.js';
import Loading from '../Loading.js';

export function AllNews() {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);
    useEffect(async () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 2500);
        await fetch(`http://localhost:3001/news/all`)
            .then(res => res.json())
            .then(data => {
                setNews(data);
            });
    }, []);

    return (
        <>
            <NavLink to="/news/add">Add News</NavLink>
            <div>
                <div className="container">
                    <div className="row">
                        <div className="col-sm-4">
                            {isLoading == true
                                ? <Loading />
                                : <ul className="news-list">
                                    {news.map(x => <NewsCard news={x} key={x._id} />)}
                                </ul>
                            }
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}