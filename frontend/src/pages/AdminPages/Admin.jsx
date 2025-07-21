import { useEffect, useState } from "react";
import "../../css/AdminStyles/Admin.css"
import { Link } from "react-router-dom";
import { API_URL, IMAGE_URL } from "../../services/api";


function Admin() {
    const [posts, setPosts] = useState([]);

    function getData() {
        fetch(`${API_URL}`)
            .then(response => {
                if (response.ok) {
                    return response.json()
                }

                throw new Error()
            })
            .then(data => {
                setPosts(data)
            })
            .catch(error => {
                alert("unable to get data")
            })
    }

    useEffect(getData, [])

    const handleDelete = (id) => {
        if (window.confirm("Are you sure you want to delete this post?")) {
            fetch(`${API_URL}/${id}`, {
                method: "DELETE",
            })
                .then((response) => {
                    if (!response.ok) {
                        throw new Error("Failed to delete post");
                    }
                    return response.json(); // Optionally process the response
                })
                .then(() => {
                    alert("Post deleted successfully");
                    getData(); // Refresh posts after deletion
                })
                .catch((error) => {
                    console.error("Error deleting post:", error);
                    alert("Unable to delete the post. Please try again.");
                });
        }
    };

    return (
        <div className="simple-post-listing">
            <h1>Blog Posts</h1>
            <Link className="create-button" to="/admin/posts/create">Create New Post</Link>
            <table className="post-table">
                <thead>
                    <tr>
                        <th>Image</th>
                        <th>ID</th>
                        <th>Title</th>
                        <th>Created At</th>
                        <th>Genre</th>
                        <th>Music Star</th>
                        <th>Action</th>
                    </tr>
                </thead>
                <tbody>
                    {posts.map(post => (
                        <tr key={post.id}>
                            <td><img src={`${IMAGE_URL}${post.image}`} alt={post.title} className="post-image" /></td>
                            <td>{post.id}</td>
                            <td>{post.title}</td>
                            <td>{post.created_at.split("T")[0]}</td>
                            <td>{post.genre}</td>
                            <td>{post.music_star}</td>
                            <td>
                                <button onClick={() => handleDelete(post.id)} className="delete-button">Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    )
}

export default Admin;
