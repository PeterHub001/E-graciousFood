import React, {useState} from 'react'
import './header.css';
import assets from '../../assets/assets.js';

const Header = () => {
    const [menu, setMenu] = useState("Home");







  return (
    <div className='navbar'>
      <img className='logo' src={assets.logo} alt="Logo" />
      <ul className='navbar-links'>
        <li onClick={()=>setMenu("Home")} className={menu==="Home"?"active":""}>Home</li>
        <li onClick={()=>setMenu("Services")} className={menu==="Services"?"active":""}>Services</li>
        <li onClick={()=>setMenu("About us")} className={menu==="About us"?"active":""}>About us</li>
        <li onClick={()=>setMenu("Contact us")} className={menu==="Contact us"?"active":""}>Contact us</li>
      </ul>
      <div className='navbar-right'>
        <img className='search-icon' src={assets.search_icon} alt="" />
        <div className='navbar-cart-icon'>
        <img className='cart-icon' src={assets.cart_icon} alt="" />
        <div className='dot'></div>
        </div>
        <button>sign in</button>
        

      </div>
      
    </div>
  );
}

export default Header;
