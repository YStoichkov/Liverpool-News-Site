import { useHistory, Redirect } from "react-router-dom";
import * as newsService from '../../services/newsService.js'
import { AuthContext } from '../../contexts/AuthContext.js'
import { useContext, useState } from 'react'
import { isAuth } from '../../hoc/isAuth.js'

const EditNews = ({
    location
}) => {
    const { user } = useContext(AuthContext);
    const [notValid, setNotValid] = useState(false)
    const [errorMessage, setErrorMessage] = useState('')
    let newsToEdit = location.state;
    let newsId = newsToEdit?._id;
    let historyHook = useHistory();
    const onNewsSubmitHandler = (e) => {
        e.preventDefault();
        try {
            let formData = new FormData(e.currentTarget);
            let { title, content, image } = Object.fromEntries(formData);
            if (title !== '' && content !== '' && image !== '') {
                let newsData = {
                    title,
                    content,
                    image,
                    newsId
                }
                newsService.editNews(newsData, newsId)
                    .then(res => {
                        if (res.message === 'ok') {
                            historyHook.push('/news/all')
                        } else {
                            console.log('Error')
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
            {user ?
                <>
                    <br />
                    <br />
                    <br />
                    <br />
                    <section id="register-page" className="content auth" method="POST">
                        <form id="register" onSubmit={onNewsSubmitHandler} >
                            <div className="container">
                                <h1>Edit News</h1>
                                <p className="errorField">
                                    {notValid && <span>{errorMessage}</span>}
                                </p>
                                <label htmlFor="title">Title</label>
                                <input type="text" id="title" name="title" defaultValue={newsToEdit.title} />
                                <label htmlFor="content">Content</label>
                                <textarea type="text" id="content" name="content" rows="15" defaultValue={newsToEdit.content}></textarea>
                                <label htmlFor="image">Image</label>
                                <input type="text" name="image" id="image" defaultValue={newsToEdit.image} />
                                <input className="btn submit" type="submit" value="Edit News" />
                            </div>
                        </form>
                    </section>
                </>
                :
                <Redirect to='/login' />
            }
        </>
    )
}
export default isAuth(EditNews);
