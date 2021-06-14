import React from "react";
import { Link } from "gatsby";

const NewPost = ({ new1, new2, new3, new4, new5 }) => {
  return (
    <nav className={"new"}>
      <div className={"new__title"}>最近の記事</div>
      <ul className={"new__ul"}>
        {new1 && (
          <li className={"new__li"}>
            <Link to={new1.fields.slug} rel="new1">
              {new1.frontmatter.title}
            </Link>
          </li>
        )}
        {new2 && (
          <li className={"new__li"}>
            <Link to={new2.fields.slug} rel="new2">
              {new2.frontmatter.title}
            </Link>
          </li>
        )}
        {new3 && (
          <li className={"new__li"}>
            <Link to={new3.fields.slug} rel="new3">
              {new3.frontmatter.title}
            </Link>
          </li>
        )}
        {new4 && (
          <li className={"new__li"}>
            <Link to={new4.fields.slug} rel="new4">
              {new4.frontmatter.title}
            </Link>
          </li>
        )}
        {new5 && (
          <li className={"new__li"}>
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
