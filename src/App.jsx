import React, { useState } from "react";
import Header from "./Views/Navbar/header.jsx";
import { Route, Routes } from "react-router-dom";
import Cart from "./pages/Cart/Cart.jsx";
import Home from "./pages/Home/Home.jsx";
import PlaceOrder from "./pages/PlaceOrder/PlaceOrder.jsx";
import Footer from "./Views/Footer/Footer.jsx";
import PopUpLogin from "./Views/PopUpLogin/PopUpLogin.jsx";

const App = () => {
  const [showLogin, setShowLogin] = useState(false);

  return (
    <>
      {showLogin && <PopUpLogin setShowLogin={setShowLogin} />}
      <div className="app">
        <Header setShowLogin={setShowLogin} />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/order" element={<PlaceOrder />} />
        </Routes>
      </div>
      <Footer />
    </>
  );
};

export default App;
