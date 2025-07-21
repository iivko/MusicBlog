import "../css/Favourites.css"
import { usePostContext } from "../context/PostContext";
import Post from "../components/post/Post";


function Favourites() {
    const { favourites } = usePostContext();

    if (favourites.length === 0) {
        return (
            <div className="container">
                <h1 className="title">Your Favorites</h1>
                <p className="emptyMessage">You don't have any favorites yet.</p>
            </div>
        )
    }
    else {
        return (
            <div>
                <h1 className="title">Your Favorites</h1>
                <div className="content-grid">
                    {favourites.map(post => (
                        <Post post={post} key={post.id} />
                    ))}
                </div>
            </div>
        )
    }
}

export default Favourites;
