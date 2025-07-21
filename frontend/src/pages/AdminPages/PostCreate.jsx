import { useNavigate } from "react-router-dom"
import "../../css/AdminStyles/PostCreate.css"
import { API_URL } from "../../services/api"
import { useState } from "react"


function PostCreate() {

    const [validationErrors, setValidationErrors] = useState({})

    const navigate = useNavigate()

    async function handleSubmit(event) {
        event.preventDefault()

        const formData = new FormData(event.target)

        try {
            const response = await fetch(`${API_URL}`, {
                method: "POST",
                body: formData
            })

            const data = await response.json()

            if (response.ok) {
                navigate("/admin")
            }
            else if (response.status === 400) {
                setValidationErrors(data)
            }
            else {
                alert("Unable to create post")
            }

        } catch (error) {
            alert(error)
        }

    }

    return (
        <div className="music-post-form">
            <h2>Add New Blog Post</h2>
            <form onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="title">Title:</label>
                    <input
                        type="text"
                        id="title"
                        name="title"
                        // onChange={handleChange}
                        required
                    />
                    <span>{validationErrors.title}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="description">Description:</label>
                    <textarea
                        id="description"
                        name="description"
                        // onChange={handleChange}
                        required
                    />
                    <span>{validationErrors.description}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="image">Image:</label>
                    <input
                        type="file"
                        id="image"
                        name="image"
                        // onChange={handleChange}
                        accept="image/*"
                        required
                    />
                </div>

                <div className="form-group">
                    <label htmlFor="genre">Genre:</label>
                    <input
                        type="text"
                        id="genre"
                        name="genre"
                        // onChange={handleChange}
                        required
                    />
                    <span>{validationErrors.genre}</span>
                </div>

                <div className="form-group">
                    <label htmlFor="music_star">Music Star:</label>
                    <input
                        type="text"
                        id="music_star"
                        name="music_star"
                        // onChange={handleChange}
                        required
                    />
                    <span>{validationErrors.music_star}</span>
                </div>

                <button className="sumbit-btn" type="submit">Submit</button>
            </form>
        </div>
    );
}


export default PostCreate;