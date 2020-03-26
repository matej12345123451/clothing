import React from "react";
import { Link } from "react-router-dom";
import "./header.css";
import { ReactComponent as Logo } from "./original.svg";
const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <Logo className="logo"></Logo>
      </Link>
      <div className="options">
        <Link className="optin" to="/shop">
          SHOP
        </Link>
        <Link to="/contact" className="optin">
          CONTACT
        </Link>
        <Link to="/signin" className="optin">
          SIGN IN
        </Link>
        <Link to="/cart" className="optin">
          CART{" "}
        </Link>
      </div>
    </div>
  );
};

export default Header;
