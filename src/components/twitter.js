import React from "react";

const Twitter = () => {
  return (
    <>
      <h3 className={"new__title"}>Twitter</h3>
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
    </>
  );
};

export default Twitter;
