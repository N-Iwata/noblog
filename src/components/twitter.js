import React, { useEffect } from "react";

let isLoadwidgets = false;

const Twitter = () => {
  useEffect(() => {
    const s = document.createElement("script");
    if (!isLoadwidgets) {
      s.setAttribute("src", "https://platform.twitter.com/widgets.js");
      document.body.appendChild(s);
      isLoadwidgets = true;
    }
    // return () => {
    //   document.body.removeChild(s);
    // };
  }, []);
  return (
    <div className="twitter">
      <a
        className="twitter-timeline"
        // data-width="300"
        data-height="600"
        // data-theme="dark"
        // data-chrome="noheadernofooternoborders"
        href="https://twitter.com/rpf_nob?ref_src=twsrc%5Etfw"
      >
        Tweet by @rpf_nob
      </a>
    </div>
  );
};

export default Twitter;
