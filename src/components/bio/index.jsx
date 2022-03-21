import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { GatsbyImage } from "gatsby-plugin-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import * as styles from "./bio.module.css";

const Bio = () => {
  const data = useStaticQuery(graphql`
    query BioQuery {
      avatar: file(absolutePath: { regex: "/profile-pic.jpg/" }) {
        childImageSharp {
          gatsbyImageData(layout: FIXED, formats: [AUTO, WEBP, AVIF], placeholder: TRACED_SVG)
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
    <div className={styles.bio}>
      <h3 className={styles.bio__title}>
        <FontAwesomeIcon icon={faUserCircle} /> プロフィール
      </h3>

      <GatsbyImage
        image={data.avatar.childImageSharp.gatsbyImageData}
        alt={author.name}
        className={styles.bio__image}
      />

      <p className={styles.bio__name}>
        Written by <strong>{author.name}</strong>
      </p>
      <p className={styles.bio__description}>このブログは{author.summary}の雑記ブログです。</p>

      <div className={styles.bio__icon_wrapper}>
        <a className={styles.bio__icon} href="https://github.com/N-Iwata">
          <img
            className={styles.bio__icon_image}
            alt="Github"
            src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white"
          />
        </a>
        <a className={styles.bio__icon} href="https://twitter.com/rpf_nob">
          <img
            className={styles.bio__icon_image}
            alt="Twitter"
            src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
          />
        </a>
        <a className={styles.bio__icon} href="https://qiita.com/rpf-nob">
          <img
            className={styles.bio__icon_image}
            alt="Qiita"
            src="https://img.shields.io/badge/qiita-55C500.svg?&style=for-the-badge&logo=qiita&logoColor=white"
          />
        </a>
        <a className={styles.bio__icon} href="https://zenn.dev/rpf_nob">
          <img
            className={styles.bio__icon_image}
            alt="Zenn"
            src="https://img.shields.io/badge/Zenn-3EA8FF.svg?&style=for-the-badge&logo=Zenn&logoColor=white"
          />
        </a>
      </div>
    </div>
  );
};

export default Bio;
