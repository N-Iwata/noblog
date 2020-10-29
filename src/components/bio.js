import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";

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
          marginBottom: rhythm(1.5),
          padding: "20px 30px 40px 30px",
          border: "#ccc 1px solid",
        }}
      >
        <div style={{ textAlign: "center" }}>
          <Image
            fixed={data.avatar.childImageSharp.fixed}
            alt={author.name}
            style={{
              minWidth: 50,
              borderRadius: `100%`,
            }}
            imgStyle={{
              borderRadius: `50%`,
            }}
          />
        </div>
        <div>
          <p
            style={{
              fontSize: 18,
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            Written by <strong>{author.name}</strong>
          </p>
          <p
            style={{
              fontSize: 14,
              textAlign: "center",
              marginBottom: 5,
            }}
          >
            {author.summary}
            <a
              style={{
                boxShadow: "none",
                marginLeft: 5,
              }}
              href="https://twitter.com/rpf_nob"
            >
              <FontAwesomeIcon
                style={{
                  height: "1.5em",
                  width: "1.5em",
                }}
                color="#3eaded"
                icon={faTwitter}
              />
            </a>
            <a
              style={{
                boxShadow: "none",
                marginLeft: 5,
              }}
              href="https://github.com/N-Iwata"
            >
              <FontAwesomeIcon
                style={{
                  height: "1.5em",
                  width: "1.5em",
                }}
                color="#333"
                icon={faGithub}
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
