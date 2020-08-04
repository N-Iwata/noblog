import React, { useState } from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";
import Pagination from "@material-ui/lab/Pagination";
import { makeStyles } from "@material-ui/core/styles";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const useStyles = makeStyles(theme => ({
  root: {
    "& > *": {
      margin: "0 auto",
      width: 300,
    },
  },
}));

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  const posts = data.allMarkdownRemark.edges;

  const classes = useStyles();
  const [currentPage, setCurrentPage] = useState(1);
  const postsPerPage = 6;
  const pageCnt = Math.ceil(posts.length / postsPerPage);
  const handleChange = (event, value) => {
    setCurrentPage(value);
    window.scrollTo(0, 0);
  };

  const indexOfLastPost = currentPage * postsPerPage;
  const indexOfFirstPost = indexOfLastPost - postsPerPage;
  const currentPosts = posts.slice(indexOfFirstPost, indexOfLastPost);

  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="All posts" />
        {currentPosts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;

          return (
            <div key={node.fields.slug} className="posts">
              <article>
                <header>
                  <h3 className="posts__title">
                    <Link className="posts__title__a" to={node.fields.slug}>
                      {title}
                    </Link>
                  </h3>
                  <small className="posts__date">{node.frontmatter.date}</small>
                </header>
                <div className="posts__image_container">
                  <Link to={node.fields.slug}>
                    <Image
                      className="posts__image"
                      fluid={node.frontmatter.hero.childImageSharp.fluid}
                    />
                  </Link>
                </div>
                <section>
                  <p
                    className="posts__desc"
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />
                  <div className="posts_more">
                    <Link className="posts__more__a" to={node.fields.slug}>
                      続きを読む＞
                    </Link>
                  </div>
                </section>
              </article>
            </div>
          );
        })}

        <div className={classes.root}>
          <Pagination
            count={pageCnt}
            page={currentPage}
            onChange={handleChange}
            color="secondary"
            size="small"
            variant="outlined"
          />
        </div>

        <Bio />
      </Layout>
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
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
