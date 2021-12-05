import { NavLink, Redirect } from "react-router-dom"
import { useState, useEffect } from 'react'
import { NewsCard } from './NewsCard.js';
import Loading from '../Loading.js';
import * as newsService from '../../services/newsService.js'
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext } from 'react'

export function AllNews() {
    const [isLoading, setIsLoading] = useState(true);
    const [news, setNews] = useState([]);
    const { user } = useContext(AuthContext);

    useEffect(async () => {
        setTimeout(() => {
            setIsLoading(false);
        }, 1500);
        newsService.allNews()
            .then(data => {
                setNews(data)
            })
    }, []);

    const userNavigation = (
        <>
            <NavLink to="/news/add">Add News</NavLink>
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
        </>);

    const guestNavigation = (<Redirect to='/login' />)

    return (
        <>
            {user ? userNavigation : guestNavigation}
        </>
    )
}