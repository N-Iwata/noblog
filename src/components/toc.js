import React, { useState } from "react";

const Toc = props => {
  const [isOpen, setOpen] = useState(true);
  const message = isOpen ? "Close" : "Open";

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className="toc">
      <div className="toc__top">
        <h4 className="toc__title">
          Content
          <button className="toc__open" onClick={handleClick}>
            [{message}]
          </button>
        </h4>
      </div>
      {isOpen && (
        <div
          className="toc__content"
          dangerouslySetInnerHTML={{
            __html: props.data,
          }}
        />
      )}
    </div>
  );
};

export default Toc;
