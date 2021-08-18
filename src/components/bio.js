import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";

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
          padding: "40px 15px 10px 15px",
          backgroundColor: "#fff",
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
          <div style={{ textAlign: "center" }}>
            <a style={{ boxShadow: "none", marginRight: 4 }} href="https://github.com/N-Iwata">
              <img
                style={{ margin: 0 }}
                alt="Github"
                src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white"
              />
            </a>
            <a style={{ boxShadow: "none", marginRight: 4 }} href="https://qiita.com/rpf-nob">
              <img
                style={{ margin: 0 }}
                alt="Qiita"
                src="https://img.shields.io/badge/qiita-55C500.svg?&style=for-the-badge&logo=qiita&logoColor=white"
              />
            </a>
          </div>
          <div style={{ textAlign: "center" }}>
            <a style={{ boxShadow: "none", marginRight: 4 }} href="https://twitter.com/rpf_nob">
              <img
                style={{ margin: 0 }}
                alt="Twitter"
                src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
              />
            </a>

            <a style={{ boxShadow: "none", marginRight: 4 }} href="https://zenn.dev/rpf_nob">
              <img
                style={{ margin: 0 }}
                alt="Zenn"
                src="https://img.shields.io/badge/Zenn-3EA8FF.svg?&style=for-the-badge&logo=Zenn&logoColor=white"
              />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Bio;
