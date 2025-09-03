import  LOGO_URL  from "../utils/constant";
import { useState } from "react";
import { Link } from "react-router-dom";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");
  return (
    <div className="header">
      <img
        className="logo"
        src= {LOGO_URL}
        alt="Food Logo"
      />

      <div className="nav">
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
          <li>
            <Link to="/contact">Contact Us</Link>
          </li>
          <li>
            <Link to="/cart">Cart</Link>
          </li>
          <button className="login-btn"
            onClick={() => {
             loginBtn === "Login"
              ? setLoginBtn("LogOut") 
              :  setLoginBtn("Login");
            }}
          >
            {loginBtn}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;