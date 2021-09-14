import { useState } from "react";
import { useHistory } from "react-router";

const Create = () => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [author, setAuthor] = useState('John Doe')

    const history = useHistory()

    const handleSubmit = (e) => {
        e.preventDefault()

        const blog = { title, content, author }

        fetch('http://localhost:8000/blogs', {
            method: 'POST',
            headers: {'Content-Type': 'Application/JSON'},
            body: JSON.stringify(blog)
        })
        .then(() => {
            history.push('/')
        })
    }

    return ( 
        <div className='create'>
            <h2>Create New Blog</h2>
            <form onSubmit={handleSubmit}>
                <label>Title:</label>
                <input type="text" required value={title} onChange={(e) => setTitle(e.target.value)} />

                <label>Content:</label>
                <textarea required value={content} onChange={(e) => setContent(e.target.value)}></textarea>

                <label>Author:</label>
                <select value={author} onChange={(e) => setAuthor(e.target.value)}>
                    <option value="John Doe">John Doe</option>
                    <option value="Jane Smith">Jane Smith</option>
                </select>
                <button>+ Create Blog</button>
            </form>
        </div>
     );
}
 
export default Create;