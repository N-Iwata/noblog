import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "@material-ui/core/Button";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

config.autoAddCss = false;
library.add(faClock);

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug} className="posts">
              <article>
                <header>
                  <h3 className="posts__title">
                    <Link
                      className="posts__title__a"
                      to={node.fields.slug}
                      title={`${title}のページに移動します。`}
                    >
                      {title}
                    </Link>
                  </h3>

                  <small className="posts__date">
                    <FontAwesomeIcon icon={faClock} />
                    <span style={{ marginLeft: 5 }}>{node.frontmatter.date}</span>
                  </small>
                </header>
                <div className="posts__image_container">
                  <Link to={node.fields.slug} title={`${title}のページに移動します。`}>
                    <Img
                      className="posts__image"
                      fluid={node.frontmatter.hero.childImageSharp.fluid}
                      loading="eager"
                      durationFadeIn={100}
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

                  <div className="posts__more">
                    <Button variant="contained" color={"default"}>
                      <Link
                        className="posts__more__a"
                        to={node.fields.slug}
                        title={`${title}のページに移動します。`}
                      >
                        READ MORE
                      </Link>
                    </Button>
                  </div>
                </section>
              </article>
            </div>
          );
        })}

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
