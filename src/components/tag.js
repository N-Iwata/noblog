import React from "react";
import { Link } from "gatsby";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import _ from "lodash";

const useStyles = makeStyles({
  button: {
    fontSize: 12,
    margin: "8px 8px 0px 0",
    height: 24,
  },
});

const Tag = props => {
  const classes = useStyles();
  return (
    <div className="tag">
      {props.tags.map((tag, index) => {
        return (
          <Button key={index} variant="contained" color={"default"} className={classes.button}>
            <Link to={`/tags/${_.kebabCase(tag)}/`} key={index} className="tag__list">
              {tag}
            </Link>
          </Button>
        );
      })}
    </div>
  );
};

export default Tag;
