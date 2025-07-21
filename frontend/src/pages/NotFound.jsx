import "../css/NotFound.css"
import { Link } from "react-router-dom";

function NotFound() {
    return (
        <div className="not-found-container">
            <h1 className="not-found-title">
                <span className="not-found-404">404</span>
                <br />
                Page Not Found
            </h1>
            <p className="not-found-message">Oops! The page you're looking for doesn't exist.</p>
            <Link to="/">
                <button className="not-found-button">Go Home</button>
            </Link>
        </div>
    );
}

export default NotFound;
