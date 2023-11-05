import React from "react";
import "./Footer.scss";
import { FaLocationArrow, FaMobileAlt, FaEnvelope } from "react-icons/fa";
import Payment from "../../../assets/payments.png";
const Footer = () => {
    return (
        <div className="footer">
            <div className="footer-content">
                <div className="col">
                <div className="title" style={{ color: 'black' }}>About</div>
                    <div className="text">
                    RADHEYSHYAM GHANSHYAM HALAWAI OUR WORK IS DONE SATISFACTORILY. WE BELIEVE IN PROVIDING THE BEST SERVICE..
                    </div>
                </div>
                <div className="col">
                    <div className="title"style={{ color: 'black' }}>Contact</div>
                    <div className="c-item">
                        <FaLocationArrow />
                        <div className="text">
                           Soorajpole Gate Ramtalai Bhuteshwar Mandir Ke Piche Kota,324005
                        </div>
                    </div>
                    <div className="c-item">
                        <FaMobileAlt />
                        <div className="text">Cell-Phone: 9829090398</div>
                        <div className="text">Cell-Phone: 9252844888</div>
                    </div>
                    <div className="c-item">
                        <FaEnvelope />
                        <div className="text">Email:vishalvishusharma456@gmail.com</div>
                    </div>
                </div>
                <div className="col">
                    <div className="title" style={{ color: 'black' }}>Sweets</div>
                    <span className="text">Decoration</span>
                    <span className="text">Chef</span>
                    <span className="text">Confectioner</span>
                    <span className="text">Restorent</span>
                    <span className="text">Home Decoration</span>
                    <span className="text">Projects</span>
                </div>
                <div className="col">
                    <div className="title" style={{ color: 'black' }}>Pages</div>
                    <span className="text">Home</span>
                    <span className="text">About</span>
                    <span className="text">Privacy Policy</span>
                    <span className="text">Returns</span>
                    <span className="text">Terms & Conditions</span>
                    <span className="text">Contact Us</span>
                </div>
            </div>
            <div className="bottom-bar">
                <div className="bottom-bar-content">
                    <span className="text">
                        RADHEYSHYAM GHANSHYAM HALWAI 2023 CREATED BY <a href="https://www.instagram.com/iamrayhul" target="_blank" rel="noopener noreferrer">RAHUL WEB-DEVELOPER</a> 
                    
                    </span>
                    <img src={Payment} />
                </div>
            </div>
        </div>
    );
};

export default Footer;