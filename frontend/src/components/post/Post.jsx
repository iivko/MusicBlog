import { useNavigate } from "react-router-dom";
import { IMAGE_URL } from "../../services/api";
import "../post/Post.css"
import { usePostContext } from "../../context/PostContext";

function Post({ post }) {
    const navigate = useNavigate();
    const { isFavourite, addToFavourites, removeFromFavourites } = usePostContext();
    const favourite = isFavourite(post.id);

    function onFavouriteClick(e) {
        e.preventDefault();
        e.stopPropagation();
        console.log(favourite);
        if (favourite) {
            removeFromFavourites(post.id);
        }
        else {
            addToFavourites(post);
        }
    }

    function onPostClick(id) {
        navigate(`/post/${id}`);
    }

    return <div className="post" onClick={() => onPostClick(post.id)}>
        <img src={`${IMAGE_URL}${post.image}`} alt={post.title} className="image-post" />
        <button
            className={`post-favourite-btn ${favourite ? "active" : ""}`}
            onClick={onFavouriteClick}
            aria-label={favourite ? "Remove from favorites" : "Add to favorites"}
        >
            <svg
                viewBox="0 0 24 24"
                fill={favourite ? "lightskyblue" : "none"}
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="post-favourite-icon"
            >
                <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path>
            </svg>
        </button>
        <div className="post-content">
            <h2>{post.title}</h2>
            <p>Created at: {post.created_at.split("T")[0]}</p>
            <p className="post-about-person">{post.star}</p>
        </div>
    </div>
}


export default Post;
