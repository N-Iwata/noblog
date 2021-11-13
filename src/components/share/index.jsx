import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinShareButton,
  HatenaShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  LinkedinIcon,
  HatenaIcon,
} from "react-share";
import * as styles from "./share.module.css";

const Share = (props) => {
  const articleTitle = `${props.title} @rpf_nob #のふのふろぐ`;
  const articleUrl = props.url;
  const articleDescription = props.description;
  const iconSize = 32;

  return (
    <div className={styles.sociallinks}>
      <p className={styles.sociallinks__title}>／ SHARE!! ＼</p>
      <div className={styles.sociallinks__icon}>
        <TwitterShareButton url={articleUrl} title={articleTitle}>
          <TwitterIcon round size={iconSize} />
        </TwitterShareButton>
      </div>
      <div className={styles.sociallinks__icon}>
        <FacebookShareButton url={articleUrl} quote={articleDescription}>
          <FacebookIcon round size={iconSize} />
        </FacebookShareButton>
      </div>
      <div className={styles.sociallinks__icon}>
        <LineShareButton url={articleUrl} quote={articleDescription}>
          <LineIcon round size={iconSize} />
        </LineShareButton>
      </div>
      <div className={styles.sociallinks__icon}>
        <LinkedinShareButton url={articleUrl} quote={articleDescription}>
          <LinkedinIcon round size={iconSize} />
        </LinkedinShareButton>
      </div>
      <div className={styles.sociallinks__icon}>
        <HatenaShareButton url={articleUrl} title={articleTitle}>
          <HatenaIcon round size={iconSize} />
        </HatenaShareButton>
      </div>
    </div>
  );
};

export default Share;
