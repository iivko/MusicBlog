import "../css/Contact.css"
import img from "../assets/images/about1.jpg"
import { Link } from "react-router-dom";


function Contact() {
    const instagramURL = "https://www.instagram.com/radoslavv.georgievv/profilecard/?igsh=OXN6c2VjeHZsdjhv"

    return (
        <div className="hero-container">
            <div className="hero-content">
                <div className="hero-image-container">
                    <img
                        src={img}
                        alt="Blog Author"
                        width={400}
                        height={400}
                        className="hero-image"
                    />
                </div>
                <div className="hero-text">
                    <h1>Get in Touch</h1>
                    <p className="author-name">Radoslav Georgiev</p>
                    <p className="author-title">Blog Author & Content Creator</p>
                    <div className="contact-details">
                        <p>Email: radoslavgeor.2006@gmail.com</p>
                        <p>Phone: 0882918741</p>
                        <p>Location: Sofia, Bulgaria</p>
                    </div>
                    <div className="social-links">
                        <Link to={instagramURL} className="social-link">Instagram</Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Contact;
