import { useEffect, useState } from "react";
import Post from "../components/post/Post.jsx";
import "../css/Home.css"
import { getPosts, searchPosts } from "../services/api.js";
import { useLocation } from "react-router-dom";


function Home() {
    const [posts, setPosts] = useState([]);
    const [error, setError] = useState(null);

    const location = useLocation();


    useEffect(() => {
        const loadPosts = async () => {
            try {
                const posts = await getPosts();
                setPosts(posts);

            } catch (error) {
                console.log(error);
                setError("Failed to load...")
            }
        }

        loadPosts();
    }, [])

    // Handle search when query changes in the URL
    useEffect(() => {
        const loadSearchResults = async () => {
            const params = new URLSearchParams(location.search);
            const query = params.get('query');

            if (query) {
                try {
                    const searchResults = await searchPosts(query);  // Await the searchPosts result
                    setPosts(searchResults);  // Set posts with the result

                } catch (error) {
                    console.error("Error searching posts:", error);
                    setError("Failed to search posts");
                }

            } 
            else {
                // If there's no search query, load all posts
                const posts = await getPosts();
                setPosts(posts);
            }
        };

        loadSearchResults();
        
    }, [location.search]);  // Runs every time the search query in the URL changes


    return <div className="content-grid">
        {posts.map(post => (
            <Post post={post} key={post.id} />
        ))}
    </div>
}

export default Home;
