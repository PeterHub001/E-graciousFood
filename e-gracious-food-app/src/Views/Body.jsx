import React from 'react';
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
function Body(){
    return(
        <div>
            <div className="hero-section">
                <p>Bringing Catering & Baking Directly to Your Doorstep – Seamless Choices, Delivered Fresh & Fast.</p>
                <span>Effortless Catering & Baking Services at Your Fingertips</span>
            </div>

            <h2>Our Delicacies</h2>
            <div className="delicacy-container">
                <img src={image1}  alt="Delicacy 1" />
                <img src={image2}  alt="Delicacy 2" />
                <img src={image3}  alt="Delicacy 3" />
                <img src={image4}  alt="Delicacy 4" />
                <img src={image5}  alt="Delicacy 5" />
                <img src={image6}  alt="Delicacy 6" />
                <img src={image7}  alt="Delicacy 7" />
                <img src={image11} alt="Delicacy 8" />
                <img src={image12} alt="Delicacy 9" />
                <img src={image13} alt="Delicacy 10" />
                <img src={image14} alt="Delicacy 11" />
            </div>
        </div>
            );
}
export default Body