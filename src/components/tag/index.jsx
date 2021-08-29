import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { kebabCase } from "lodash/string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";
import styles from "./tag.module.css";

const useStyles = makeStyles({
  button: {
    margin: "8px 8px 0 0",
    height: 24,
  },
});

const Tag = props => {
  const classes = useStyles();
  return (
    <div className={styles.tag}>
      {props.tags.map((tag, index) => {
        return (
          <Button key={index} variant="contained" color={"default"} className={classes.button}>
            <Link
              to={`/tags/${kebabCase(tag)}/`}
              key={index}
              className={styles.tag__list}
              title={`${tag}のtagページに移動します。`}
            >
              <FontAwesomeIcon icon={faTag} />　{tag}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Tag;
