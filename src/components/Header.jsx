import  LOGO_URL  from "../utils/constant";

const Header = () => {
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
        </ul>
      </div>
    </div>
  );
};

export default Header;