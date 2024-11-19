import React, { useState } from "react";
import "./header.css";
import assets from "../../assets/assets.js";
import { Link } from "react-router-dom";

const Header = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");

  return (
    <div className="navbar">
      <img className="logo" src={assets.logo} alt="Logo" />
      <ul className="navbar-links">
        <Link to='/'          onClick={() => setMenu("home")}
          className={menu === "home" ? "active" : ""}
        >
          home
        </Link>
        <a href="#explore-menu"
          onClick={() => setMenu("menu")}
          className={menu === "menu" ? "active" : ""}
        >
          menu
        </a>
        <a href="#app-download"
          onClick={() => setMenu("mobile app")}
          className={menu === "mobile app" ? "active" : ""}
        >
          mobile app
        </a>
        <a href="#footer"
          onClick={() => setMenu("contact us")}
          className={menu === "contact us" ? "active" : ""}
        >
          contact us
        </a>
      </ul>
      <div className="navbar-right">
        <img className="search-icon" src={assets.search_icon} alt="" />
        <div className="navbar-cart-icon">
          <img className="cart-icon" src={assets.cart_icon} alt="" />
          <div className="dot"></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Header;
