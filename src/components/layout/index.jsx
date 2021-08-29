import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import NavBar from "../navbar";
import Footer from "../footer";
import SideBar from "../sidebar";
import styles from "./layout.module.css";

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

  return (
    <div>
      <NavBar />
      <div className={styles.container}>
        <main className={styles.contents}>{children}</main>
        <SideBar
          new1={data.allMarkdownRemark.edges[0].node}
          new2={data.allMarkdownRemark.edges[2].node}
          new3={data.allMarkdownRemark.edges[3].node}
          new4={data.allMarkdownRemark.edges[4].node}
          new5={data.allMarkdownRemark.edges[5].node}
          tagList={data.tags.group}
        />
      </div>

      <Footer author={author} />
    </div>
  );
};

export default Layout;
