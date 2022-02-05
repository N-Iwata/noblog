import React from "react";
import { Link } from "gatsby";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPencilAlt } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./newPost.module.css";

const NewPost = ({ newPosts }) => {
  return (
    <nav className={styles.new_post}>
      <h3 className={styles.new__title}>
        <FontAwesomeIcon icon={faPencilAlt} /> 最近の記事
      </h3>
      <ul className={styles.new__ul}>
        {newPosts.map((post) => (
          <li className={styles.new__li} key={post.fields.slug}>
            <Link to={post.fields.slug}>{post.frontmatter.title}</Link>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default NewPost;
