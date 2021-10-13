import React from "react";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "./Group 2.svg";
import "./header.styles.css";
const Header = ({ login, setLogin }) => {
  return (
    <>
      <Icon className="icon" />
      <h1 className="text">REACT ROUTER TUTORIAL</h1>
      <ul className="nav">
        <li>
          <Link className="text small" to="/">
            Home
          </Link>
        </li>
        <li>
          <Link className="text small" to="/about">
            About
          </Link>
        </li>
        <li>
          <Link className="text small" to="/profile-page">
            Profile
          </Link>
        </li>
        <li>
          <Link className="text small" to="/topics">
            Topics
          </Link>
        </li>
        <li onClick={() => setLogin(!login)} className="text small">
          {login ? "logout" : "  Login"}
        </li>
      </ul>
    </>
  );
};

export default Header;
