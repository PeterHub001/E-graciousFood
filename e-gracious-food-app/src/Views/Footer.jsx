import React from 'react';
import logo from "./public/logo.jpeg";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from 'react-icons/fa';
function Footer(){
   return( <footer>
            <div className="footer-container">
                <div className="footer-content">
                    <img className="logo" src={logo} alt="Logo" />
                    <p>Bringing Catering & Baking Directly to Your Doorstep – Seamless Choices, Delivered Fresh & Fast.</p>
                    <span>Effortless Catering & Baking Services at Your Fingertips</span>
                    <div style={{ display: 'flex', gap: '30px' }}>
                        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
                        <FaFacebook size={30} color="#3b5998" />
                        </a>
                        <a href="https://www.whatsapp.com" target="_blank" rel="noopener noreferrer">
                        <FaWhatsapp size={30} color="#25D366" />
                        </a>
                        <a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">
                        <FaInstagram size={30} color="#E1306C" />
                        </a>
                        <a href="https://www.twitter.com" target="_blank" rel="noopener noreferrer">
                        <FaTwitter size={30} color="#1DA1F2" />
                        </a>
                    </div>
                </div>
            </div>
        </footer>
   );

}
export default Footer;