import React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import Button from "@material-ui/core/Button";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock, faSyncAlt } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Tag from "../../components/tag";
import * as styles from "../homepage/posts.module.css";

import { Link, graphql } from "gatsby";
import Adsense from "../../components/adsense";

config.autoAddCss = false;
library.add([faClock, faSyncAlt]);

const Tags = ({ pageContext, data }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const author = data.site.siteMetadata.author.name;

  const tagHeader = `[${tag}]タグの記事一覧（全${totalCount}件）`;

  return (
    <div>
      <Layout author={author}>
        <Seo title={`Tag: ${tag}`} description={`${tag}タグを含む記事の一覧ページです`} />
        <h2 style={{ marginTop: 28 }}>{tagHeader}</h2>
        {edges.map(({ node }) => {
          const title = node.frontmatter.title || node.fields.slug;
          return (
            <div key={node.fields.slug} className={styles.posts}>
              <article>
                <header>
                  <h3 className={styles.posts__title}>
                    <Link
                      className={styles.posts__title__a}
                      to={`${node.fields.slug}/`}
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

                <Link to={`${node.fields.slug}/`} title={`${title}のページに移動します。`}>
                  <GatsbyImage
                    image={node.frontmatter.hero.childImageSharp.gatsbyImageData}
                    alt="hero画像"
                    className={styles.posts__image}
                  />
                </Link>

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
                        to={`${node.fields.slug}/`}
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
        <Adsense />
      </Layout>
    </div>
  );
};

export default Tags;

export const pageQuery = graphql`
  query ($tag: String) {
    site {
      siteMetadata {
        title
        author {
          name
        }
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
            updated(formatString: "YYYY-MM-DD")
            description
            slug
            tags
            hero {
              childImageSharp {
                gatsbyImageData(width: 1000, layout: CONSTRAINED)
              }
            }
          }
        }
      }
    }
  }
`;
