import React, { useState, useContext } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
import useOnlinestatus from "../Hooks/useOnlinestatus";
import UserContext from "../utils/UserContext";
import { useSelector } from "react-redux";

const Header = () => {
  const [btnName, setBtnName] = useState("Login");
  const { loggedInUser } = useContext(UserContext);
  const onlineStatus = useOnlinestatus();
  const cartItems = useSelector((store) => store.cart.items);

  return (
    <header className="rf-header">
      {/* Brand */}
      <Link to="/" className="rf-header-logo-wrap">
        <img className="rf-header-logo" src={LOGO_URL} alt="Fork & Flame logo" />
        <span className="rf-header-brand">
          Fork &amp; <span>Flame</span>
        </span>
      </Link>

      {/* Nav */}
      <nav>
        <ul className="rf-nav">
          <li>
            <span className="rf-nav-status">
              {onlineStatus ? "🟢" : "🔴"}
            </span>
          </li>
          <li>
            <Link to="/" className="rf-nav-link">
              Home
            </Link>
          </li>
          <li>
            <Link to="/about" className="rf-nav-link">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="rf-nav-link">
              Contact
            </Link>
          </li>
          <li>
            <Link to="/grocery" className="rf-nav-link">
              Grocery
            </Link>
          </li>
          <li>
            <Link to="/cart" className="rf-nav-cart">
              <svg
                width="14"
                height="14"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="9" cy="21" r="1" />
                <circle cx="20" cy="21" r="1" />
                <path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h9.72a2 2 0 0 0 2-1.61L23 6H6" />
              </svg>
              Cart
              {cartItems.length > 0 && (
                <span className="rf-nav-cart-count">{cartItems.length}</span>
              )}
            </Link>
          </li>
          <li>
            <button
              className="rf-nav-login-btn"
              onClick={() =>
                setBtnName(btnName === "Login" ? "Logout" : "Login")
              }
            >
              {btnName}
            </button>
          </li>
          {loggedInUser && (
            <li>
              <span className="rf-nav-user">{loggedInUser}</span>
            </li>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
