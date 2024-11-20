import React from "react";
import "./Footer.css";
import { FaFacebook, FaWhatsapp, FaInstagram, FaTwitter } from "react-icons/fa";
import assets from "../../assets/assets";

const Footer = () => {
  return (
    <div className="footer" id="footer">
      <div className="footer-content">
        <div className="footer-content-left">
          <img src={assets.logo} alt="" />
          <p>
            Order your favorite food here... Choose from a diverse menu
            featuring a delectable array of dishes with great test
          </p>
          <div
            className="footer-social-icons"
            style={{ display: "flex", gap: "10px", padding: "20px 0px 0px 0px" }}
          >
            <a
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaFacebook size={30} color="#3b5998" />
            </a>
            <a
              href="https://www.whatsapp.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaWhatsapp size={30} color="#25D366" />
            </a>
            <a
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaInstagram size={30} color="#E1306C" />
            </a>
            <a
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaTwitter size={30} color="#1DA1F2" />
            </a>
          </div>
        </div>
        <div className="footer-content-center">
            <h2>Company</h2>
            <ul>
                <li>Home</li>
                <li>About</li>
                <li>Delivery</li>
                <li>Privacy policy</li>
            </ul>
        </div>
        <div className="footer-content-right">
            <h2>Get in touch</h2>
            <ul>
                <li>+233 59 815 4511</li>
                <li>egracious@gmail.com</li>
            </ul>
        </div>
      </div>
      <hr />
      <p className="footer-copyright">Copyright 2024 &copy; Egraciousfood.com - All Right Reserved.</p>
    </div>
  );
};

export default Footer;
