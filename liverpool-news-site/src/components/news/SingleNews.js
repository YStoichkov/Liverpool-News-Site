import { useEffect, useState } from "react";
import Cookies from 'universal-cookie'
import { useJwt } from 'react-jwt'
import Swal from 'sweetalert2'
import { useHistory, Link } from 'react-router-dom'
import * as newsService from '../../services/newsService.js'
import * as authService from '../../services/authService.js'
import { isAuth } from '../../hoc/isAuth.js'

const SingleNews = ({ match }) => {
    const [news, setNews] = useState({});
    const [voted, setVoted] = useState(false);
    let cookies = new Cookies();
    let authCookie = cookies.get('auth_cookie');
    const { decodedToken } = useJwt(authCookie.AUTH_COOKIE_NAME);
    let userId = decodedToken?._id;
    let historyHook = useHistory();

    const headerStyle = {
        backgroundImage: 'url(/img/background-image.jpg)',
        width: '100%',
    }
    const imageStyle = {
        width: '100 %'
    }

    useEffect(async () => {
        let newsId = match.params.newsId;
        await fetch(`http://localhost:3001/news/details/${newsId}`)
            .then(res => res.json())
            .then(async (newsResult) => {
                let dateStringFormat = newsResult.createdAt;
                let date = new Date(dateStringFormat);
                let result = date.toUTCString();
                newsResult.createdAt = result;
                let fullName = await authService.getCreatorName(newsResult.creator);
                newsResult['creatorFullName'] = fullName;
                setNews(newsResult);
            })
    }, [voted])


    const onDeleteHandler = (e) => {
        e.preventDefault();
        const swalWithBootstrapButtons = Swal.mixin({
            customClass: {
                container: 'swal-wide',
                confirmButton: 'btn-danger',
                cancelButton: 'btn-success'
            },
            buttonsStyling: false
        })

        swalWithBootstrapButtons.fire({
            title: 'Are you sure you want to delete this?',
            text: "You won't be able to revert it!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonText: 'Yes, delete it!',
            cancelButtonText: 'No, cancel!',
            reverseButtons: true
        }).then((result) => {
            if (result.isConfirmed) {
                let newsId = news._id;
                newsService.deleteNews(newsId, userId)
                    .then(() => {
                        swalWithBootstrapButtons.fire(
                            'Deleted!',
                            'Your file has been deleted.',
                            'success',
                        )
                        historyHook.push('/news/all')
                    })
            } else if (
                result.dismiss === Swal.DismissReason.cancel
            ) {
                swalWithBootstrapButtons.fire(
                    'Cancelled',
                    'Your imaginary file is safe :)',
                    'error'
                )
            }
        })
    }

    const likePost = (e) => {
        if (!news.peopleLikedOrDisliked.includes(userId) && news.creator !== userId) {
            e.preventDefault();
            fetch(`http://localhost:3001/news/${news._id}/upVote`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ userId })
            })
                .then(res => console.log(res))
        } else {
            setVoted(true);
        }

    }

    const disslikePost = (e) => {
        e.preventDefault();
        if (!news.peopleLikedOrDisliked.includes(userId) && news.creator !== userId) {
            fetch(`http://localhost:3001/news/${news._id}/downVote`, {
                method: 'POST',
                headers: {
                    'Content-type': 'application/json'
                },
                body: JSON.stringify({ userId })
            })
                .then(res => console.log(res))
        } else {
            setVoted(true);
        }
    }

    return (
        <>
            <header className="main-header post-head" style={headerStyle}>
                <img src={news.image} style={imageStyle} alt="single-news" />
                <div className="vertical">
                    <div className="main-header-content inner">
                        <h1 className="post-title">{news.title}</h1>
                        <div className="entry-title-divider">
                            <span></span><span></span><span></span>
                        </div>
                        <section className="post-meta">
                            <time className="post-date" >Added: {news.createdAt} </time>
                            <span>Author: {news.creatorFullName}</span> |
                            {news.creator === userId ?
                                <>
                                    <button className="btn btn-warning" onClick={onDeleteHandler}>Delete News</button>
                                    <Link to={{ pathname: `/ news / edit / ${news._id}`, state: news }}><button className="btn btn-primary">Edit News</button></Link>
                                </> : null}
                        </section>
                    </div>
                    {news.creator !== userId ?
                        <>
                            <div className="center">
                                <i className="far fa-thumbs-up fa-5x" onClick={(e) => likePost(e)} style={{ cursor: 'pointer', color: 'green' }}>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</i>
                                <span>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;</span>
                                <i className="far fa-thumbs-down fa-5x" onClick={(e) => disslikePost(e)} style={{ cursor: 'pointer', color: 'red' }}></i>
                                <h3><strong style={{ color: 'white' }}>Likes: {news?.likes}</strong></h3>
                                <h3><strong style={{ color: 'white' }}>Dislikes: {news?.dislikes}</strong></h3>
                                {voted && <h3>You've already voted for this news</h3>}
                            </div>
                        </> : null
                    }
                </div>
            </header>
            <main id="content" className="content" role="main">
                <div className="wraps">
                    <img src="/img/shadow.png" className="wrapshadow" alt="shadow" />
                    <article className="post featured">
                        <section className="post-content">
                            <p><strong>{news.content}</strong></p>
                        </section>
                    </article>
                </div>
            </main>
        </>
    )
}

export default isAuth(SingleNews)