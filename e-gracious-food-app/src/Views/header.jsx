import logo from "./public/logo.jpeg";
import image1 from "./public/img1 (1).jpeg";
import image2 from "./public/img1 (2).jpeg";
import image3 from "./public/img1 (3).jpeg";
import image4 from "./public/img1 (4).jpeg";
import image5 from "./public/img1 (5).jpeg";
import image6 from "./public/img1 (6).jpeg";
import image7 from "./public/img1 (7).jpeg";
import image11 from "./public/img1 (11).jpeg";
import image12 from "./public/img1 (12).jpeg";
import image13 from "./public/img1 (13).jpeg";
import image14 from "./public/img1 (14).jpeg";

import React, {useState} from "react";




function Header(){
    return( <div className="container">
                <div className="nav-bar">
                    <img className ="logo"src={logo} alt="" />
                    <ul className="nav-links">
                    <li>Home</li>
                    <li>About Us</li>
                    <li>Service</li>
                    <li>Contact us</li>
                    </ul>
                    <button>Login</button>
                    <button>Get Started</button>
                
                </div>
                <div className="hero-section">
                <p>Bringing Catering & Baking Directly to Your Doorstep – Seamless Choices, Delivered Fresh & Fast.</p><span>Effortless Catering & Baking Services at Your Fingertips</span>
                
                </div>
                <h2>Our Delicacies</h2>
                <div className="delicacy-container">
                    <img src={image1} alt="" />
                    <img src={image2} alt="" />
                    <img src={image3} alt="" />
                    <img src={image4} alt="" />
                    <img src={image5} alt="" />
                    <img src={image6} alt="" />
                    <img src={image7} alt="" />
                    <img src={image11} alt="" />
                    <img src={image12} alt="" />
                    <img src={image13} alt="" />
                    <img src={image14} alt="" />
                </div>

            </div>);
}
export default Header;