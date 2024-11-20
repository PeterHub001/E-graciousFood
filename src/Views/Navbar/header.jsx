import React, { useContext, useState } from "react";
import "./header.css";
import assets from "../../assets/assets.js";
import { Link } from "react-router-dom";
import { StoreContext } from "../../Context/StoreContext.jsx";

const Header = ({setShowLogin}) => {
  const [menu, setMenu] = useState("Home");
  const {getTotalCartAmount} = useContext(StoreContext);

  return (
    <div className="navbar">
      <Link to='/'><img className="logo" src={assets.logo} alt="Logo" /></Link>
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
          <Link to='/cart'><img className="cart-icon" src={assets.cart_icon} alt="" /></Link>
          <div className={getTotalCartAmount()===0?"":"dot"}></div>
        </div>
        <button onClick={()=>setShowLogin(true)}>sign in</button>
      </div>
    </div>
  );
};

export default Header;
