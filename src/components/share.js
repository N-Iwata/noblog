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

const Share = props => {
  const articleTitle = props.title;
  const articleUrl = props.url;
  const articleDescription = props.description;
  const iconSize = 32;

  return (
    <React.Fragment>
      <div className="social-links">
        <p className="social-links__title">／ SHARE!! ＼</p>
        <div className="social-links__icon">
          <TwitterShareButton url={articleUrl} title={articleTitle}>
            <TwitterIcon round size={iconSize} />
          </TwitterShareButton>
        </div>
        <div className="social-links__icon">
          <FacebookShareButton url={articleUrl} quote={articleDescription}>
            <FacebookIcon round size={iconSize} />
          </FacebookShareButton>
        </div>
        <div className="social-links__icon">
          <LineShareButton url={articleUrl} quote={articleDescription}>
            <LineIcon round size={iconSize} />
          </LineShareButton>
        </div>
        <div className="social-links__icon">
          <LinkedinShareButton url={articleUrl} quote={articleDescription}>
            <LinkedinIcon round size={iconSize} />
          </LinkedinShareButton>
        </div>
        <div className="social-links__icon">
          <HatenaShareButton url={articleUrl} title={articleTitle}>
            <HatenaIcon round size={iconSize} />
          </HatenaShareButton>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Share;
