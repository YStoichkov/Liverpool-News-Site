import Cookies from 'universal-cookie'
import { useJwt } from 'react-jwt'
import { useHistory } from 'react-router-dom';
import * as newsService from '../../services/newsService.js'

export function AddNews() {
    let cookies = new Cookies();
    let authCookie = cookies.get('auth_cookie');
    const { decodedToken } = useJwt(authCookie);
    let userId = decodedToken?._id;

    let historyHook = useHistory();
    const onNewsSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let title = formData.get('title');
        let content = formData.get('content');
        let image = formData.get('image');

        let newsData = {
            title,
            content,
            image,
            userId
        }
        newsService.createNews(newsData)
            .then(res => {
                if (res === 'ok') {
                    historyHook.push('/news/all')
                } else {
                    console.log('Error')
                }
            })
    }

    return (
        <>
            <br />
            <br />
            <br />
            <br />
            <section id="register-page" className="content auth" method="POST">
                <form id="register" onSubmit={onNewsSubmitHandler} >
                    <div className="container">
                        <h1>Add News</h1>
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