import React from "react";
import styles from "./twitter.module.css";

const Twitter = () => {
  return (
    <div className={styles.twitter}>
      <h3 className={styles.twitter__title}>Twitter</h3>
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
