import React from "react";
import { Link, graphql } from "gatsby";
// import Image from "gatsby-image";
import Img from "gatsby-image";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";
import Toc from "../components/toc";
import Tag from "../components/tag";
import Share from "../components/share";
import Iframely from "../components/iframely";
import { rhythm, scale } from "../utils/typography";

config.autoAddCss = false;
library.add(faClock);

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const author = data.site.siteMetadata.author.name;
  const { slug, previous, next } = pageContext;

  const hero = post.frontmatter.hero.childImageSharp.fluid.src;
  const image = `${siteUrl}${hero}`;

  return (
    <div>
      <Iframely />
      <Layout location={location} title={siteTitle} author={author}>
        <SEO
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
            <p
              style={{
                ...scale(-1 / 5),
                display: `block`,
                marginBottom: 0,
              }}
            >
              <FontAwesomeIcon icon={faClock} />
              <span style={{ marginLeft: 5 }}>{post.frontmatter.date}</span>
            </p>
          </header>
          <Tag tags={post.frontmatter.tags} />
          <div>
            <Img
              className="blog__hero"
              fluid={data.markdownRemark.frontmatter.hero.childImageSharp.fluid}
              loading="eager"
              durationFadeIn={100}
            />
          </div>
          <Toc data={data.markdownRemark.tableOfContents} />
          <section className="blog-section" dangerouslySetInnerHTML={{ __html: post.html }} />
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
          <footer>
            <Bio />
          </footer>
        </article>

        <nav>
          <ul
            style={{
              display: `flex`,
              flexWrap: `wrap`,
              justifyContent: `space-between`,
              listStyle: `none`,
              padding: 0,
            }}
          >
            <li>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← {previous.frontmatter.title}
                </Link>
              )}
            </li>
            <li>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  {next.frontmatter.title} →
                </Link>
              )}
            </li>
          </ul>
        </nav>
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
  }
`;
