import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHome } from "@fortawesome/free-solid-svg-icons";
import { Link } from "gatsby";

const Footer = props => {
  return (
    <footer className="footer">
      <div className="footer__home">
        <Link to={"/"} title={"ブログトップに移動します。"}>
          <i>
            <FontAwesomeIcon icon={faHome} />
            <span>HOME</span>
          </i>
        </Link>
      </div>
      {/* ©2020-{new Date().getFullYear()}.{author}All Rights Reserved. */}
      <div>©2020 {props.author} All Rights Reserved.</div>
    </footer>
  );
};

export default Footer;
