import React from "react";
import { Link, graphql } from "gatsby";
// import Image from "gatsby-image";
import Img from "gatsby-image";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Toc from "../components/toc";
import Tag from "../components/tag";
import Adsense from "../components/adsense";
import Bio from "../components/bio";
import Share from "../components/share";
import Iframely from "../components/iframely";
import { rhythm } from "../utils/typography";

config.autoAddCss = false;
library.add(faClock);

const BlogPostTemplate = ({ data, pageContext, location }) => {
  const post = data.markdownRemark;
  const siteTitle = data.site.siteMetadata.title;
  const siteUrl = data.site.siteMetadata.siteUrl;
  const author = data.site.siteMetadata.author.name;
  const { slug, previous, next, new1, new2, new3, new4, new5 } = pageContext;
  console.log("previous: ", previous);

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
            <small>
              <FontAwesomeIcon icon={faClock} />
              <span style={{ marginLeft: 5 }}>{post.frontmatter.date}</span>
            </small>
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
          <Adsense />
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
        </article>

        <nav>
          <ul className={"prevnext-ul"}>
            <li className={"prevnext-li"}>
              {previous && (
                <Link to={previous.fields.slug} rel="prev">
                  ← 前の記事
                </Link>
              )}
            </li>
            <li className={"prevnext-li"}>
              {next && (
                <Link to={next.fields.slug} rel="next">
                  次の記事 →
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <nav className={"new"}>
          <div className={"new__title"}>最近の記事</div>
          <ul className={"new__ul"}>
            <li className={"new__li"}>
              {new1 && (
                <Link to={new1.fields.slug} rel="new1">
                  {new1.frontmatter.date}: {new1.frontmatter.title}
                </Link>
              )}
            </li>
            <li className={"new__li"}>
              {new2 && (
                <Link to={new2.fields.slug} rel="new2">
                  {new2.frontmatter.date}: {new2.frontmatter.title}
                </Link>
              )}
            </li>
            <li className={"new__li"}>
              {new3 && (
                <Link to={new3.fields.slug} rel="new3">
                  {new3.frontmatter.date}: {new3.frontmatter.title}
                </Link>
              )}
            </li>
            <li className={"new__li"}>
              {new4 && (
                <Link to={new4.fields.slug} rel="new4">
                  {new4.frontmatter.date}: {new4.frontmatter.title}
                </Link>
              )}
            </li>
            <li className={"new__li"}>
              {new5 && (
                <Link to={new5.fields.slug} rel="new5">
                  {new5.frontmatter.date}: {new5.frontmatter.title}
                </Link>
              )}
            </li>
          </ul>
        </nav>
        <Bio />
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
  }
`;
