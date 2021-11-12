import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faHistory } from "@fortawesome/free-solid-svg-icons";
import { Helmet } from "react-helmet";
import * as styles from "./index.module.css";

const Activity = () => {
  return (
    <>
      <Helmet>
        <script
          async
          src="https://unpkg.com/blog-friends-embed@latest/widgets.js"
          charset="utf-8"
        ></script>
      </Helmet>
      <div className={styles.activity}>
        <h3 className={styles.activity__title}>
          <FontAwesomeIcon icon={faHistory} /> 活動履歴
        </h3>
        <div className={styles.activity__heatmap}>
          <a
            href="https://blog-friends.com/users/rpf-nob/"
            class="js-blog-friends"
            data-user="rpf-nob"
          >
            rpf-nob
          </a>
        </div>
      </div>
    </>
  );
};

export default Activity;
