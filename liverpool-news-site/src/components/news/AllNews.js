import { NavLink} from "react-router-dom"
import { useState, useEffect } from 'react'
import { NewsCard } from './NewsCard.js';
import Loading from '../Loading.js';
import * as newsService from '../../services/newsService.js'
import * as authService from '../../services/authService.js'
import { isAuth } from '../../hoc/isAuth.js'
import { Button } from 'react-bootstrap'

const AllNews = () => {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);

    useEffect(async () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        newsService.allNews()
            .then(data => {
                data.map(async (x) => {
                    let dateStringFormat = x.createdAt;
                    let date = new Date(dateStringFormat);
                    let result = date.toUTCString();
                    x.createdAt = result;
                    let creatorFullName = await authService.getCreatorName(x.creator);
                    x['creatorFullName'] = creatorFullName;
                })
                setNews(data)
            })
    }, []);

    return (
        <>
            <Button variant="info"><NavLink to="/news/add">Add News</NavLink></Button>{' '}
            <div className="shell">
                <div className="container">
                    {isLoading === true
                        ? <Loading />
                        :
                        <div className="row">
                            {news.map(x => <NewsCard news={x} key={x._id} />)}
                        </div>
                    }
                </div>
            </div>
        </>
    )
}

export default isAuth(AllNews);