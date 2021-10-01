import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./newPost.module.css";

const NewPost = ({ new1, new2, new3, new4, new5 }) => {
  return (
    <nav className={styles.new_post}>
      <h3 className={styles.new__title}>
        <FontAwesomeIcon icon={faPencilAlt} /> 最近の記事
      </h3>
      <ul className={styles.new__ul}>
        {new1 && (
          <li className={styles.new__li}>
            <Link to={new1.fields.slug} rel="new1">
              {new1.frontmatter.title}
            </Link>
          </li>
        )}
        {new2 && (
          <li className={styles.new__li}>
            <Link to={new2.fields.slug} rel="new2">
              {new2.frontmatter.title}
            </Link>
          </li>
        )}
        {new3 && (
          <li className={styles.new__li}>
            <Link to={new3.fields.slug} rel="new3">
              {new3.frontmatter.title}
            </Link>
          </li>
        )}
        {new4 && (
          <li className={styles.new__li}>
            <Link to={new4.fields.slug} rel="new4">
              {new4.frontmatter.title}
            </Link>
          </li>
        )}
        {new5 && (
          <li className={styles.new__li}>
            <Link to={new5.fields.slug} rel="new5">
              {new5.frontmatter.title}
            </Link>
          </li>
        )}
      </ul>
    </nav>
  );
};

export default NewPost;
