import React from "react";
import { Link, graphql } from "gatsby";
import Img from "gatsby-image";
import Button from "@material-ui/core/Button";
import { config, library } from "@fortawesome/fontawesome-svg-core";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Layout from "../components/layout";
import SEO from "../components/seo";
import Tag from "../components/tag";
import Adsense from "../components/adsense";
import Pagenation from "../components/pagenation";

config.autoAddCss = false;
library.add(faClock);

const BlogIndex = ({ data, location, pageContext }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  const posts = data.allMarkdownRemark.edges;
  const postList = data.allMarkdownRemark.edges;
  console.log("postList: ", postList);
  const { new1, new2, new3, new4, new5, tagList } = pageContext;
  console.log("tagList: ", tagList);
  return (
    <div>
      <Layout
        location={location}
        title={siteTitle}
        author={author}
        new1={new1}
        new2={new2}
        new3={new3}
        new4={new4}
        new5={new5}
        tagList={tagList}
      >
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
                <Tag tags={node.frontmatter.tags} />
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
        {/* <Bio /> */}
        <Adsense />
        <Adsense />
      </Layout>
    </div>
  );
};

export default BlogIndex;

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
