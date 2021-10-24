import React from "react";
import Adsense from "../adsense";
import Bio from "../bio";
import Twitter from "../twitter";
import NewPost from "../newPost";
import TagList from "../tagList";
import * as styles from "./sidebar.module.css";

const SideBar = ({ new1, new2, new3, new4, new5, tagList }) => {
  return (
    <aside className={styles.sidebar}>
      <Bio />
      <Adsense />
      <Adsense />
      <Adsense />
      <Adsense />
      <Adsense />
      <div className={styles.sticky}>
        <Twitter />
        {new1 && new2 && new3 && new4 && new5 && (
          <NewPost new1={new1} new2={new2} new3={new3} new4={new4} new5={new5} />
        )}
        {tagList && <TagList tagList={tagList} />}
      </div>
    </aside>
  );
};

export default SideBar;
