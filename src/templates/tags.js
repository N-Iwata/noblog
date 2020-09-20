import React from "react";
import Image from "gatsby-image";
import Button from "@material-ui/core/Button";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faClock } from "@fortawesome/free-solid-svg-icons";

import Bio from "../components/bio";
import Layout from "../components/layout";
import SEO from "../components/seo";

// Components
import { Link, graphql } from "gatsby";

const Tags = ({ pageContext, data, location }) => {
  const { tag } = pageContext;
  const { edges, totalCount } = data.allMarkdownRemark;
  const author = data.site.siteMetadata.author.name;

  const tagHeader = `[${tag}]タグの記事一覧（全${totalCount}件）`;

  return (
    <div>
      <Layout location={location} author={author}>
        <SEO title={`Tag: ${tag}`} description={`${tag}タグを含む記事の一覧ページです`} />
        <h2>{tagHeader}</h2>
        {edges.map(({ node }) => {
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
                  <small className="posts__date">
                    <FontAwesomeIcon icon={faClock} />
                    <span style={{ marginLeft: 5 }}>{node.frontmatter.date}</span>
                  </small>
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
                  <div className="posts__more">
                    <Button variant="contained" color={"default"}>
                      <Link className="posts__more__a" to={node.fields.slug}>
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

export default Tags;

export const pageQuery = graphql`
  query($tag: String) {
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
