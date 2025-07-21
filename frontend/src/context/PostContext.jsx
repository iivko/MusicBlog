import { createContext, useState, useContext, useEffect } from "react";

const PostContext = createContext();

export const usePostContext = () => useContext(PostContext);

export const PostProvider = ({ children }) => {
    const [favourites, setFavourites] = useState([]);

    useEffect(() => {
        const storedFavouritePosts = localStorage.getItem("favourites");

        if (storedFavouritePosts) {
            setFavourites(JSON.parse(storedFavouritePosts));
        }
    }, [])

    useEffect(() => {
        localStorage.setItem("favourites", JSON.stringify(favourites));
    }, [favourites])

    const addToFavourites = (post) => {
        setFavourites(prev => [...prev, post]);
    }

    const removeFromFavourites = (postID) => {
        setFavourites(prev => prev.filter(post => post.id !== postID));
    }

    const isFavourite = (postID) => {
        return favourites.some(post => post.id === postID);
    }

    const value = {
        favourites,
        addToFavourites,
        removeFromFavourites,
        isFavourite,
    }

    return <PostContext.Provider value={value}>
        {children}
    </PostContext.Provider>
}