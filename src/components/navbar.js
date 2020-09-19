import React from "react";
import { Link } from "gatsby";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

const NavBar = () => {
  console.log("test");
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
          <Link to="/">Blog</Link>
        </li>
        <li className="navbar__li">
          <Link to="/about">About</Link>
        </li>
        <li className="navbar__li">
          <Link to="/contact">Contact</Link>
        </li>
        <li className="navbar__li">
          <Link to="/privacy_policy">Privacy Policy</Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
