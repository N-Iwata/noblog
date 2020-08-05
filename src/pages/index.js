import React, { useState } from "react";
import InfiniteScroll from "react-infinite-scroller";
import { Link, graphql } from "gatsby";
import Image from "gatsby-image";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

const BlogIndex = ({ data, location }) => {
  const siteTitle = data.site.siteMetadata.title;
  const author = data.site.siteMetadata.author.name;
  const posts = data.allMarkdownRemark.edges;

  const itemsPerPage = 6;
  const [hasMoreItems, sethasMoreItems] = useState(true);
  const [records, setrecords] = useState(itemsPerPage);

  const showItems = posts => {
    let items = [];
    for (let i = 0; i < records; i++) {
      if (posts[i] !== undefined) {
        let node = posts[i].node;
        const title = node.frontmatter.title || node.fields.slug;
        items.push(
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
      }
    }

    return items;
  };

  const loadMore = () => {
    if (records >= posts.length) {
      sethasMoreItems(false);
    } else {
      setTimeout(() => {
        setrecords(records + itemsPerPage);
      }, 1000);
    }
  };

  return (
    <div>
      <Layout location={location} title={siteTitle} author={author}>
        <SEO title="All posts" />

        <InfiniteScroll
          loadMore={loadMore}
          hasMore={hasMoreItems}
          loader={
            <div className="loader" key={0}>
              Loading ...
            </div>
          }
          useWindow={true}
        >
          {showItems(posts)}
        </InfiniteScroll>

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
