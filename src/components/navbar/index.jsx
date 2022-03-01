import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./navbar.module.css";

const NavBar = () => {
  return (
    <nav className={styles.navbar}>
      <input type="checkbox" id="check" className={styles.check} />
      <label htmlFor="check" className={styles.checkbtn}>
        <FontAwesomeIcon icon={faBars} />
      </label>
      <span className={styles.navbar__title}>
        <Link to="/" title={"ブログトップに移動します。"}>
          のふのふろぐ
          <span role="img" aria-label="mahjong">
            🀄
          </span>
        </Link>
      </span>
      <ul className={styles.navbar__ul}>
        <li className={styles.navbar__li}>
          <Link to="/" title={"ブログトップに移動します。"}>
            Blog
          </Link>
        </li>
        <li className={styles.navbar__li}>
          <Link to="/about/" title={"Aboutページに移動します。"}>
            About
          </Link>
        </li>
        <li className={styles.navbar__li}>
          <Link to="/contact/" title={"お問い合わせページに移動します。"}>
            Contact
          </Link>
        </li>
        <li className={styles.navbar__li}>
          <Link to="/privacy_policy/" title={"PrivacyPolicyページに移動します。"}>
            Privacy Policy
          </Link>
        </li>
      </ul>
    </nav>
  );
};

export default NavBar;
