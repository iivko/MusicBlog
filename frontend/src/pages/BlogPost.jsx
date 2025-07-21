import { useParams } from "react-router-dom";
import "../css/BlogPost.css"
import { IMAGE_URL, getPost } from "../services/api"
import { useEffect, useState } from "react";


function BlogPost() {

    const [post, setPost] = useState();
    const [loading, setLoading] = useState(true);
    const params = useParams();

    console.log(post);
    
    useEffect(() => {
        const data = async () => {
            setLoading(true);
            try {
                const result = await getPost(params.id);
                setPost(result);

            } catch (error) {
                alert("Failed to load")
            }
            finally {
                setLoading(false);
            }
        }

        data();
    }, [])

    if (loading) {
        return <div>Loading...</div>
    }

    return (
        <div className="container">
            <h1 className="postTitle">{post.title}</h1>
            <div className="imageWrapper">
                <img
                    src={`${IMAGE_URL}${post.image}`}
                    alt={post.title}
                    className="postImage"
                />
            </div>
            <p className="postDescription">{post.description}</p>
            <div className="postDetails">
                <span className="post-details-item">🎵Genre: {post.genre}</span>
                <span className="post-details-item">⭐Star: {post.music_star}</span>
                <span className="post-details-item">📅Posted on: {post.created_at.split("T")[0]}</span>
            </div>
        </div>
    );
}

export default BlogPost;