import React from "react";
import { graphql } from "gatsby";
import NavBar from "./navbar";
import Footer from "./footer";
import SideBar from "./sidebar";

const Layout = ({ author, children, new1, new2, new3, new4, new5, tagList }) => {
  return (
    <div>
      <NavBar />
      <div className="container">
        <main className="contens">{children}</main>
        <SideBar new1={new1} new2={new2} new3={new3} new4={new4} new5={new5} tagList={tagList} />
      </div>

      <Footer author={author} />
    </div>
  );
};

export default Layout;

export const pageQuery = graphql`
  query($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      skip: $skip
      limit: $limit
    ) {
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
  }
`;
