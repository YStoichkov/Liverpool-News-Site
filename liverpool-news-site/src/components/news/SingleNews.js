import { useEffect, useState } from "react";
import Cookies from 'universal-cookie'
import { useJwt } from 'react-jwt'
import Swal from 'sweetalert2'
import { useHistory, Link } from 'react-router-dom'
import * as newsService from '../../services/newsService.js'

export function SingleNews({ match }) {
    const [news, setNews] = useState({});
    let cookies = new Cookies();
    let authCookie = cookies.get('auth_cookie');
    const { decodedToken } = useJwt(authCookie);
    let userId = decodedToken?._id;
    let userFullName = decodedToken?.firstName + ' ' + decodedToken?.lastName;
    let historyHook = useHistory();

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
                            <time className="post-date" >Added: {news.createdAt}</time>
                            <span>Author: {userFullName}</span>
                            <button className="btn btn-warning" onClick={onDeleteHandler}>Delete News</button>
                            <Link to={{ pathname: `/news/edit/${news._id}`, state: news }}><button className="btn btn-primary">Edit News</button></Link>
                        </section>
                    </div>
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