import React from "react";
import { navigate } from "gatsby";
import { makeStyles } from "@material-ui/core/styles";
import { Pagination } from "@material-ui/lab";
import useMedia from "use-media";

const useStyles = makeStyles((theme) => ({
  root: {
    display: `flex`,
    flexWrap: `wrap`,
    justifyContent: `center`,
    alignItems: "center",
  },
}));

const Pagenation = ({ pageContext }) => {
  const classes = useStyles();
  const isWide = useMedia({ minWidth: "480px" });
  const { numberOfPages, humanPageNumber } = pageContext;

  const handleChange = (event, value) => {
    value === 1 ? navigate(`/`) : navigate(`/page/${value}`);
  };

  return (
    <div className={classes.root}>
      <Pagination
        size={isWide ? "large" : "small"}
        defaultPage={humanPageNumber}
        count={numberOfPages}
        color="primary"
        onChange={handleChange}
        siblingCount={1}
        boundaryCount={2}
      />
    </div>
  );
};

export default Pagenation;
