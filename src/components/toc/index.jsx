import React, { useState } from "react";
import styles from "./toc.module.css";

const Toc = props => {
  const [isOpen, setOpen] = useState(true);
  const message = isOpen ? "Close" : "Open";

  const handleClick = () => {
    setOpen(!isOpen);
  };
  return (
    <div className={styles.toc}>
      <div className={styles.toc__top}>
        <h4 className={styles.toc__title}>
          Content
          <button className="toc__open" onClick={handleClick}>
            [{message}]
          </button>
        </h4>
      </div>
      {isOpen && (
        <div
          className={styles.toc__content}
          dangerouslySetInnerHTML={{
            __html: props.data,
          }}
        />
      )}
    </div>
  );
};

export default Toc;
