import React from "react";
import {
  FacebookShareButton,
  TwitterShareButton,
  LineShareButton,
  LinkedinShareButton,
  FacebookIcon,
  TwitterIcon,
  LineIcon,
  LinkedinIcon,
} from "react-share";

const Share = props => {
  const articleTitle = props.title;
  const articleUrl = props.url;
  const articleDescription = props.description;
  const iconSize = 32;

  return (
    <React.Fragment>
      <h3>SHARE!!</h3>
      <div className="social-links">
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
      </div>
    </React.Fragment>
  );
};

export default Share;
