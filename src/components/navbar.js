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
        <Link to="/" title={"ブログトップに移動します。"}>
          のふのふろぐ
        </Link>
      </span>
      <ul className="navbar__ul">
        <li className="navbar__li">
          <Link to="/" title={"ブログトップに移動します。"}>
            Blog
          </Link>
        </li>
        <li className="navbar__li">
          <Link to="/about" title={"Aboutページに移動します。"}>
            About
          </Link>
        </li>
        <li className="navbar__li">
          <Link to="/contact" title={"お問い合わせページに移動します。"}>
            Contact
          </Link>
        </li>
        <li className="navbar__li">
          <Link to="/privacy_policy" title={"PrivacyPolicyページに移動します。"}>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
