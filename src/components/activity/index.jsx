import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./index.module.css";

const Activity = () => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = "https://unpkg.com/blog-friends-embed@latest/widgets.js";
    script.async = true;
    script.charSet = "utf-8";
    document.body.appendChild(script);
    return () => {
      document.body.removeChild(script);
    };
  }, []);
  return (
    <div className={styles.activity}>
      <h3 className={styles.activity__title}>
        <FontAwesomeIcon icon={faHistory} /> 活動履歴
      </h3>
      <div>
        <a
          href="https://blog-friends.com/users/rpf-nob/"
          class="js-blog-friends"
          data-user="rpf-nob"
        >
          rpf-nob
        </a>
      </div>
    </div>
  );
};

export default Activity;
