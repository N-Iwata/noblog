import React from "react";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="All posts" />
        <Bio />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div className="posts">
              <article key={node.fields.slug}>
                <header>
                  <h3 className="posts__title">
                    <Link
                      className="posts__title__a"
                      to={node.frontmatter.slug}
                    >
                      {title}
                    </Link>
                  </h3>
                  <small className="posts__date">{node.frontmatter.date}</small>
                </header>
                <div className="posts__image_container">
                  <Link to={node.frontmatter.slug}>
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
                    <Link className="posts__more__a" to={node.frontmatter.slug}>
                      続きを読む＞
                    </Link>
                  </div>
                </section>
              </article>
            </div>
          );
        })}
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
