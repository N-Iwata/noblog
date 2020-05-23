import React from "react";
import { Link } from "gatsby";

const NavBar = () => {
  return (
    <nav className="navbar">
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/">HOME</Link>
        </li>
        <li className="navbar__li">
          <Link to="/about">ABOUT</Link>
        </li>
        <li className="navbar__li">
          <Link to="/contact">CONTACT</Link>
        </li>
        {/* <li className="navbar__li">
          <Link to="/privacy_policy">PRIVACY POLICY</Link>
        </li> */}
      </ul>
    </nav>
  );
};

export default NavBar;
