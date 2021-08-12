import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
// import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
// import { faGithub, faTwitter } from "@fortawesome/free-brands-svg-icons";
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
          padding: "40px 15px 40px 15px",
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
              marginBottom: 8,
            }}
          >
            Written by <strong>{author.name}</strong>
          </p>
          <p
            style={{
              fontSize: 14,
              textAlign: "center",
              marginBottom: 8,
              padding: "0 12px",
            }}
          >
            {author.summary}
          </p>
          <p>
            <a style={{ boxShadow: "none", marginRight: "4px" }} href="https://github.com/N-Iwata">
              <img
                alt="Github"
                src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white"
              />
            </a>
            <a style={{ boxShadow: "none", marginRight: "4px" }} href="https://twitter.com/rpf_nob">
              <img
                alt="Twitter"
                src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
              />
            </a>
            <a style={{ boxShadow: "none", marginRight: "4px" }} href="https://qiita.com/rpf-nob">
              <img
                alt="Medium"
                src="https://img.shields.io/badge/qiita-55C500.svg?&style=for-the-badge&logo=qiita&logoColor=white"
              />
            </a>
            <a style={{ boxShadow: "none", marginRight: "4px" }} href="https://zenn.dev/rpf_nob">
              <img
                alt="Zenn"
                src="https://img.shields.io/badge/Zenn-3EA8FF.svg?&style=for-the-badge&logo=Zenn&logoColor=white"
              />
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Bio;
