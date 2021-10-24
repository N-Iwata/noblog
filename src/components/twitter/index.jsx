import React from "react";
import * as styles from "./twitter.module.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTwitter } from "@fortawesome/free-brands-svg-icons";

const Twitter = () => {
  return (
    <div className={styles.twitter}>
      <h3 className={styles.twitter__title}>
        <FontAwesomeIcon icon={faTwitter} /> Twitter
      </h3>
      <a
        className="twitter-timeline"
        data-height="600"
        href="https://twitter.com/rpf_nob?ref_src=twsrc%5Etfw"
      >
        Tweet by @rpf_nob
      </a>
    </div>
  );
};

export default Twitter;
