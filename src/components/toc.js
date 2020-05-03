import React from "react";

const Toc = props => {
  return (
    <div className="toc">
      <h4 className="toc__title">目次</h4>
      <div
        className="toc__content"
        dangerouslySetInnerHTML={{
          __html: props.data,
        }}
      />
    </div>
  );
};

export default Toc;
