import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";
import * as styles from "./footer.module.css";

const Footer = props => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__home}>
        <Link to={"/"} title={"ブログトップに移動します。"}>
          <i>
            <FontAwesomeIcon icon={faHome} />
            <span>HOME</span>
          </i>
        </Link>
      </div>
      <div>
        ©2020-{new Date().getFullYear()}.{props.author}All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
