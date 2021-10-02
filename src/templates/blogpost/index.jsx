import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Layout from "../../components/layout";
import Seo from "../../components/seo";
import Toc from "../../components/toc";
import Tag from "../../components/tag";
import Adsense from "../../components/adsense";
import Share from "../../components/share";
import Iframely from "../../components/iframely";
import { rhythm } from "../../utils/typography";
import * as styles from "./blog.module.css";

config.autoAddCss = false;
library.add(faClock);

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const author = data.site.siteMetadata.author.name;
  const { slug, previous, next } = pageContext;

  const hero = post.frontmatter.hero.childImageSharp.fluid.src;
  const image = `${siteUrl}${hero}`;

  return (
    <div>
      <Iframely />
      <Layout author={author}>
        <Seo
          title={post.frontmatter.title}
          description={post.frontmatter.description || post.excerpt}
          image={image}
        />
        <article>
          <header>
            <h1
              style={{
                marginTop: rhythm(1),
                marginBottom: 0,
                fontSize: "1.4em",
                borderBottom: "7px solid #edf6ff",
              }}
            >
              {post.frontmatter.title}
            </h1>
            <small>
              <FontAwesomeIcon icon={faClock} />
              <span style={{ marginLeft: 5 }}>{post.frontmatter.date}</span>
            </small>
          </header>
          <Tag tags={post.frontmatter.tags} />
          <div>
            <Img
              className={styles.blog__hero}
              fluid={data.markdownRemark.frontmatter.hero.childImageSharp.fluid}
              loading="eager"
              durationFadeIn={100}
            />
          </div>

          <Toc data={data.markdownRemark.tableOfContents} />
          <Share
            title={post.frontmatter.title}
            url={`${siteUrl}${slug}`}
            description={post.excerpt}
          />
          <Adsense />
          <section
            className={styles.blog__section}
            dangerouslySetInnerHTML={{ __html: post.html }}
          />
          <hr
            style={{
              marginBottom: rhythm(1),
            }}
          />
          <Share
            title={post.frontmatter.title}
            url={`${siteUrl}${slug}`}
            description={post.excerpt}
          />
        </article>

        <nav>
          <ul className={styles.prevnext__ul}>
            {previous && (
              <li className={styles.prevnext__li}>
                <Link to={previous.fields.slug} rel="prev">
                  ← 前の記事
                </Link>
              </li>
            )}
            {next && (
              <li className={styles.prevnext__li}>
                <Link to={next.fields.slug} rel="next">
                  次の記事 →
                </Link>
              </li>
            )}
          </ul>
        </nav>
        <Adsense />
        <Adsense />
        <Adsense />
      </Layout>
    </div>
  );
};

export default BlogPostTemplate;

export const pageQuery = graphql`
  query BlogPostBySlug($slug: String!) {
    site {
      siteMetadata {
        title
        author {
          name
        }
        siteUrl
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      id
      excerpt(pruneLength: 160)
      html
      tableOfContents
      frontmatter {
        title
        date(formatString: "YYYY-MM-DD")
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
    allMarkdownRemark(limit: 2000, sort: { fields: [frontmatter___date], order: DESC }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "YYYY-MM-DD")
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
