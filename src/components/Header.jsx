import LOGO_URL from "../utils/constant";
import { useState, useContext } from "react";
import { Link } from "react-router-dom";
import useOnlineStatus from "../utils/hooks/useOnlineStatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [loginBtn, setLoginBtn] = useState("Login");

  const { loggedInUser } = useContext(UserContext);

  const status = useOnlineStatus();

  //Subscribing to store using Selector
  const cartItems = useSelector((store) => store.cart.items);
  console.log("Items Added to cart : ",cartItems);
  return (
    <div className="header">
      <img className="logo" src={LOGO_URL} alt="Food Logo" />

      <div className="nav">
        <ul>
          <li className="p-4 ">Status: {status ? "Online" : "Offline"}</li>
          <li className="p-4 ">
            <Link to="/">Home</Link>
          </li>
          <li className="p-4 ">
            <Link to="/about">About</Link>
          </li>
          <li className="p-4 ">
            <Link to="/contact">Contact Us</Link>
          </li>
          <li className="p-4 ">
            <Link to="/grocery">Grocery</Link>
          </li>
           <li className="p-4">
            <Link to="/cart">🛒({cartItems.length} Items)</Link>
          </li>
          <li>
            <h1 className="p-4 font-bold">{loggedInUser}</h1>
          </li>
          <button
            className="login-btn p-4"
            onClick={() => {
              loginBtn === "Login"
                ? setLoginBtn("LogOut")
                : setLoginBtn("Login");
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
