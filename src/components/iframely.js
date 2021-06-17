import React, { useEffect } from "react";
import Helmet from "react-helmet";

function Iframely() {
  useEffect(() => {
    if (window.iframely) {
      window.iframely.load();
    }
  }, []);
  return (
    <Helmet>
      <script async src="//cdn.iframe.ly/embed.js" charset="utf-8" />
      {/* <script async src="//cdn.iframe.ly/embed.js" charset="utf-8"></script> */}
    </Helmet>
  );
}
export default Iframely;
