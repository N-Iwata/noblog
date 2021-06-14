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

// const getTagList = postList => {
//   let retList = [];

//   postList.forEach(data => {
//     const tags = data.node.frontmatter.tags;
//     tags.forEach(tag => {
//       retList.push(tag);
//     });
//   });
//   return Array.from(new Set(retList));
// };

const TagList = ({ tagList }) => {
  console.log("tagList: ", tagList);
  const classes = useStyles();

  return (
    <nav className={"new"}>
      <div className={"new__title"}>タグ一覧</div>
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
