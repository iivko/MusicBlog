import { useState } from "react";
import "../navigation/NavBar.css"
import { Link, useLocation, useNavigate } from "react-router-dom";


function NavBar() {
    const [search, setSearch] = useState("");

    const location = useLocation();
    const navigate = useNavigate();

    const handleSearch = (event) => {
        const searchQuery = event.target.value;
        setSearch(searchQuery);

        if (searchQuery.length > 0) {
            if (searchQuery.trim() !== "") {
                navigate(`/?query=${searchQuery}`);
            }
        }
        else if (searchQuery === "") {
            navigate("/");
        }
        else {
            if (!location.pathname !== "/") {
                return;
            }
        }
    };


    return <nav className="navbar">
        <div className="navbar-logo">
            <span>RadiMusicBlog</span>
        </div>
        <ul className="navbar-items">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/about">About</Link></li>
            <li><Link to="/contact">Contact</Link></li>
            <li><Link to="/favourites">Favourites</Link></li>
        </ul>
        <div className="navbar-search-bar">
            <input
                type="text"
                placeholder="Search..."
                value={search}
                onChange={handleSearch}
            />
            <button type="submit" className="navbar-button">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="navbar-search-icon">
                    <circle cx="11" cy="11" r="8"></circle>
                    <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                </svg>
            </button>
        </div>
    </nav>
}

export default NavBar;