import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Image from "gatsby-image";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUserCircle } from "@fortawesome/free-solid-svg-icons";
import styles from "./bio.module.css";

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
    <div className={styles.bio}>
      <h3 className={styles.bio__title}>
        <FontAwesomeIcon icon={faUserCircle} /> プロフィール
      </h3>
      <div className={styles.bio__image_wrapper}>
        <Image
          fixed={data.avatar.childImageSharp.fixed}
          alt={author.name}
          className={styles.bio__image}
        />
      </div>

      <p className={styles.bio__name}>
        Written by <strong>{author.name}</strong>
      </p>
      <p className={styles.bio__description}>{author.summary}</p>
      <div className={styles.bio__icon_wrapper}>
        <a className={styles.bio__icon} href="https://github.com/N-Iwata">
          <img
            className={styles.bio__icon_image}
            alt="Github"
            src="https://img.shields.io/badge/GitHub-%2312100E.svg?&style=for-the-badge&logo=Github&logoColor=white"
          />
        </a>
        <a className={styles.bio__icon} href="https://qiita.com/rpf-nob">
          <img
            className={styles.bio__icon_image}
            alt="Qiita"
            src="https://img.shields.io/badge/qiita-55C500.svg?&style=for-the-badge&logo=qiita&logoColor=white"
          />
        </a>
        <a className={styles.bio__icon} href="https://twitter.com/rpf_nob">
          <img
            className={styles.bio__icon_image}
            alt="Twitter"
            src="https://img.shields.io/badge/twitter-%231DA1F2.svg?&style=for-the-badge&logo=twitter&logoColor=white"
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
