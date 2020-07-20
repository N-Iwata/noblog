import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  return (
    <nav className="navbar">
      <input type="checkbox" id="check" />
      <label htmlFor="check" className="checkbtn">
        <FontAwesomeIcon icon={faBars} />
      </label>
      <span className="navbar__title">
        <Link to="/">RPF NoBlog</Link>
      </span>
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/">BLOG</Link>
        </li>
        <li className="navbar__li">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="navbar__li">
          <Link to="/contact">CONTACT</Link>
        </li>
        <li className="navbar__li">
          <Link to="/privacy_policy">PRIVACY POLICY</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
