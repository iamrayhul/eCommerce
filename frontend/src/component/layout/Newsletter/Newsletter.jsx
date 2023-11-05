import React from "react";
import {
    FaFacebookF,
    FaYoutube,
    FaInstagram,
    FaWhatsapp
} from "react-icons/fa";
import "./Newsletter.scss";
const Newsletter = () => {
    return (
        <div className="newsletter-section">
            <div className="newsletter-content">
                <span className="small-text">Newsletter</span>
                <span className="big-text"style={{ color: 'black' }}>
                    Sign up for latest updates and offers
                </span>
                <div className="form">
                    <input type="text" placeholder="Email Address" />
                    <button>Subscribe</button>
                </div>
                <span className="text">
                    Will be used in accordance with our Privacy Policy
                </span>
                <span className="social-icons">
                    <a href="https://wa.me/+919252844888" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <FaWhatsapp size={20} />
                        </div>
                    </a>

                    <a href="https://www.instagram.com/vishalvishusharma456?utm_source=qr" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <FaInstagram size={20} />
                        </div>
                    </a>




                    <a href="https://www.youtube.com/@radhaycaterersdisplay4873" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <FaYoutube size={20} />
                        </div>
                    </a>






                    <a href="https://www.facebook.com/people/Radhey-Caterers-Display/100070471658806/?mibextid=ZbWKwL" target="_blank" rel="noopener noreferrer">
                        <div className="icon">
                            <FaFacebookF size={20} />
                        </div>
                    </a>
                </span>
            </div>
        </div>
    );
};

export default Newsletter;