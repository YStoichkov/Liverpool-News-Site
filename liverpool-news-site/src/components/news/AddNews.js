import Cookies from 'universal-cookie'
import { useJwt } from 'react-jwt'
import { useState } from 'react';
import { useHistory } from 'react-router-dom';
import * as newsService from '../../services/newsService.js'
import { isAuth } from '../../hoc/isAuth.js'

const AddNews = () => {
    const [notValid, setNotValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    let cookies = new Cookies();
    let authCookie = cookies.get('auth_cookie');
    const { decodedToken } = useJwt(authCookie.AUTH_COOKIE_NAME);
    let userId = decodedToken?._id;

    let historyHook = useHistory();
    const onNewsSubmitHandler = (e) => {
        e.preventDefault();
        try {
            let formData = new FormData(e.currentTarget);
            let title = formData.get('title');
            let content = formData.get('content');
            let image = formData.get('image');

            if (title !== '' && content !== '' && image !== '') {
                let newsData = {
                    title,
                    content,
                    image,
                    userId
                }
                newsService.createNews(newsData)
                    .then(res => {
                        if (res.message === 'ok') {
                            historyHook.push('/news/all')
                        } else {
                            setErrorMessage(`Invalid input`)
                            setNotValid(true);
                        }
                    })
            } else {
                setErrorMessage(`Invalid input`)
                setNotValid(true);
            }
        } catch (error) {
            setErrorMessage(`Invalid input`)
            setNotValid(true);
        }
    }

    return (
        <>
            <br />
            <section id="register-page" className="content auth" method="POST">
                <form id="register" onSubmit={onNewsSubmitHandler} >
                    <div className="container">
                        <h1>Add News</h1>
                        <p className="errorField">
                            {notValid && <span>{errorMessage}</span>}
                        </p>
                        <label htmlFor="title">Title</label>
                        <input type="text" id="title" name="title" />
                        <label htmlFor="content">Content</label>
                        <textarea type="text" id="content" name="content" rows="15"></textarea>
                        <label htmlFor="image">Image</label>
                        <input type="text" name="image" id="image" />
                        <input className="btn submit" type="submit" value="Add News" />
                    </div>
                </form>
            </section>
        </>
    )
}

export default isAuth(AddNews)