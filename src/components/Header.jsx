import  LOGO_URL  from "../utils/constant";
import { useState } from "react";

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
          <li>Home</li>
          <li>Contact Us</li>
          <li>About Us</li>
          <li>Cart</li>
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