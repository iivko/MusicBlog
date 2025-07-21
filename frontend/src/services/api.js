// Home and Post Page only

export const API_URL = "http://localhost:3000/posts"
export const IMAGE_URL = "http://localhost:3000/images/"


export const getPosts = async () => {
    const response = await fetch(`${API_URL}`);
    const data = await response.json();
    return data;
};

export const searchPosts = async (query) => {
    const response = await fetch(`${API_URL}?q=${query}`);
    const data = await response.json();
    return data;
}

export const getPost = async (id) => {
    console.log(id);
    const response = await fetch(`${API_URL}/${id}`);
    const data = await response.json();
    console.log(data);
    return data;
}