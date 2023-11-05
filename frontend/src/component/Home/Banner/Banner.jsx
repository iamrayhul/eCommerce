import React from "react";

import "./Banner.scss";
import BannerImg from "../../../assets/chef.png";

const Banner = () => {
    return (
        <div className="hero-banner">
            <div className="content">
                <div className="text-content">
                    <h1>RGH</h1>
                    <p style={{ color: 'white' }}>
                   Radheyshyam Ghanshyam Halwai We Have Expertise in Preparing Rajasthani Vegetarian Food, Please Give Us An Opportunity To Serve You Sometime.
                    </p>
                    <div className="ctas">
                    <a href="/Aboutme"><div className="banner-cta">About Me...</div></a>
                        <a href="#container"> <div className="banner-cta v2">Shop Now</div></a>
                    </div>
                </div>
                <img className="banner-img" src={BannerImg} />
            </div>
        </div>
    );
};

export default Banner;