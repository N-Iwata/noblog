import React, { useEffect } from "react";
import Helmet from "react-helmet";

const Iframely = () => {
  useEffect(() => {
    if (window.iframely) {
      window.iframely.load();
    }
  }, []);
  return (
    <Helmet>
      <script async src="//cdn.iframe.ly/embed.js" charset="utf-8" />
    </Helmet>
  );
};
export default Iframely;
