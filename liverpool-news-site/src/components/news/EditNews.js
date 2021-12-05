import { useHistory } from "react-router-dom";
import * as newsService from '../../services/newsService.js'

export function EditNews({
    location
}) {
    let newsToEdit = location.state;
    let newsId = newsToEdit._id;
    let historyHook = useHistory();
    const onNewsSubmitHandler = (e) => {
        e.preventDefault();
        let formData = new FormData(e.currentTarget);
        let { title, content, image } = Object.fromEntries(formData);
        let newsData = {
            title,
            content,
            image,
            newsId
        }
        newsService.editNews(newsData, newsId)
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
                        <h1>Edit News</h1>
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
    )
}