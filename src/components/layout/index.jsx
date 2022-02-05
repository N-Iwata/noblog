import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import NavBar from "../navbar";
import Footer from "../footer";
import SideBar from "../sidebar";
import * as styles from "./layout.module.css";

const Layout = ({ author, children }) => {
  const data = useStaticQuery(graphql`
    query {
      allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }, limit: 2000) {
        edges {
          node {
            excerpt
            fields {
              slug
            }
            frontmatter {
              date(formatString: "YYYY-MM-DD")
              title
              description
              slug
              tags
              hero {
                childImageSharp {
                  fluid(maxWidth: 1280) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        }
      }
      tags: allMarkdownRemark(limit: 2000) {
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `);
  const newPosts = data.allMarkdownRemark.edges
    .filter((_, index) => index < 10)
    .map((edge) => edge.node);

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.contents}>{children}</main>
        <SideBar newPosts={newPosts} tagList={data.tags.group} />
      </div>

      <Footer author={author} />
    </div>
  );
};

export default Layout;
