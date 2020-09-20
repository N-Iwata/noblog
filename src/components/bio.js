/**
 * Bio component that queries for data
 * with Gatsby's useStaticQuery component
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
import image from "../images/qiita.png";

import { rhythm } from "../utils/typography";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          fixed(width: 50, height: 50) {
            ...GatsbyImageSharpFixed
          }
        }
      }
      site {
        siteMetadata {
          author {
            name
            summary
          }
          social {
            twitter
          }
        }
      }
    }
  `);

  const { author } = data.site.siteMetadata;
  return (
    <div>
      <div
        style={{
          display: `flex`,
          marginBottom: rhythm(2.5),
          padding: "20px 30px 40px 30px",
          border: "#ccc 3px solid",
        }}
      >
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          style={{
            marginRight: rhythm(1 / 2),
            marginBottom: 0,
            minWidth: 50,
            borderRadius: `100%`,
          }}
          imgStyle={{
            borderRadius: `50%`,
          }}
        />
        <div>
          <span
            style={{
              fontSize: 18,
            }}
          >
            Written by <strong>{author.name}</strong>
          </span>

          <br />
          <span>{author.summary}</span>
          <div
            style={{
              position: "relative",
              marginTop: "10px",
            }}
          >
            <div
              style={{
                position: "absolute",
                width: "100%",
                top: "0",
                left: "0",
              }}
            >
              <a
                style={{
                  boxShadow: "none",
                }}
                href="https://twitter.com/rpf_nob"
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    width: "1.5em",
                    marginRight: "5",
                  }}
                  color="#3eaded"
                  icon={faTwitter}
                />
              </a>
              <a
                style={{
                  boxShadow: "none",
                }}
                href="https://github.com/N-Iwata"
              >
                <FontAwesomeIcon
                  style={{
                    height: "1.5em",
                    width: "1.5em",
                    marginRight: "5",
                  }}
                  color="#333"
                  icon={faGithub}
                />
              </a>
            </div>
            <div
              style={{
                position: "absolute",
                width: "32px",
                top: "-4px",
                left: "56px",
              }}
            >
              <a
                style={{
                  boxShadow: "none",
                }}
                href="https://qiita.com/rpf-nob"
              >
                <img
                  src={image}
                  alt="Qiita"
                  style={{
                    height: "2em",
                    width: "2em",
                  }}
                />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
