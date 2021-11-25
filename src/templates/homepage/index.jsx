import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "@material-ui/core/Button";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Tag from "../../components/tag";
import Pagenation from "../../components/pagenation";
import * as styles from "./posts.module.css";

config.autoAddCss = false;
library.add([faClock, faSyncAlt]);

const BlogIndex = ({ data, pageContext }) => {
  const author = data.site.siteMetadata.author.name;
  const posts = data.allMarkdownRemark.edges;

  return (
    <div>
      <Layout author={author}>
        <Seo title="All posts" />
        {posts.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug} className={styles.posts}>
              <article>
                <header>
                  <h3 className={styles.posts__title}>
                    <Link
                      className={styles.posts__title__a}
                      to={node.fields.slug}
                      title={`${title}のページに移動します。`}
                    >
                      {title}
                    </Link>
                  </h3>

                  <small>
                    <FontAwesomeIcon icon={faClock} />
                    <span style={{ marginLeft: 5 }}>{node.frontmatter.date}</span>
                  </small>
                  {node.frontmatter.updated && node.frontmatter.date !== node.frontmatter.updated && (
                    <small style={{ marginLeft: 5 }}>
                      <FontAwesomeIcon icon={faSyncAlt} />
                      <span style={{ marginLeft: 5 }}>{node.frontmatter.updated}</span>
                    </small>
                  )}
                </header>
                <Tag tags={node.frontmatter.tags} />
                <div className={styles.posts__image_container}>
                  <Link to={node.fields.slug} title={`${title}のページに移動します。`}>
                    <Img
                      className={styles.posts__image}
                      fluid={node.frontmatter.hero.childImageSharp.fluid}
                      loading="eager"
                      durationFadeIn={100}
                    />
                  </Link>
                </div>
                <section>
                  <p
                    className={styles.posts__desc}
                    dangerouslySetInnerHTML={{
                      __html: node.frontmatter.description || node.excerpt,
                    }}
                  />

                  <div className={styles.posts__more}>
                    <Button variant="contained" color={"default"}>
                      <Link
                        className={styles.posts__more__a}
                        to={node.fields.slug}
                        title={`${title}のページに移動します。`}
                      >
                        記事を読む
                      </Link>
                    </Button>
                  </div>
                </section>
              </article>
            </div>
          );
        })}
        <Pagenation pageContext={pageContext} />
      </Layout>
    </div>
  );
};

export default BlogIndex;

export const pageQuery = graphql`
  query ($skip: Int!, $limit: Int!) {
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
            updated(formatString: "YYYY-MM-DD")
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
