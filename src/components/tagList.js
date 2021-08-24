import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import { kebabCase } from "lodash/string";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTag } from "@fortawesome/free-solid-svg-icons";

const useStyles = makeStyles({
  button: {
    fontSize: 12,
    margin: "8px",
    height: 24,
  },
});

const TagList = ({ tagList }) => {
  const classes = useStyles();

  return (
    <nav className={"new"}>
      <h3 className={"new__title"}>
        <FontAwesomeIcon icon={faTag} /> タグ一覧
      </h3>
      {tagList &&
        tagList.map(tag => (
          <Button
            key={tag.fieldValue}
            variant="contained"
            color={"default"}
            className={classes.button}
          >
            <Link
              to={`/tags/${kebabCase(tag.fieldValue)}/`}
              key={tag}
              className="tag__list"
              title={`${tag.fieldValue}のtagページに移動します。`}
            >
              <FontAwesomeIcon icon={faTag} />
              　{tag.fieldValue}
            </Link>
          </Button>
        ))}
    </nav>
  );
};

export default TagList;
