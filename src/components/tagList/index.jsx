import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { kebabCase } from "lodash/string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./tagList.module.css";

const useStyles = makeStyles({
  button: {
    fontSize: 12,
    margin: "8px",
    height: 24,
  },
});

const TagList = ({ tagList }) => {
  console.log("%c tagList: ", "color: #23d541", tagList);
  const classes = useStyles();

  return (
    <nav className={styles.tagList}>
      <h3 className={styles.tagList__title}>
        <FontAwesomeIcon icon={faTag} /> タグ一覧
      </h3>
      <ul className={styles.tag__ul}>
        {tagList &&
          tagList.map((tag) => (
            <>
              <li className={styles.tag__li} key={tag.fieldValue}>
                <Link to={`/tags/${kebabCase(tag.fieldValue)}/`}>
                  <FontAwesomeIcon icon={faTag} />　{`${tag.fieldValue}（${tag.totalCount}）`}
                </Link>
              </li>
            </>
          ))}
      </ul>
    </nav>
  );
};

export default TagList;
