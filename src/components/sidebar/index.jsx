import React from "react";
import Adsense from "../adsense";
import Bio from "../bio";
import Twitter from "../twitter";
import NewPost from "../newPost";
import TagList from "../tagList";
import * as styles from "./sidebar.module.css";

const SideBar = ({ newPosts, tagList }) => {
  return (
    <aside className={styles.sidebar}>
      <div className={styles.sticky}>
        <Bio />
        <div className={styles.adsense}>
          <Adsense />
          <Adsense />
        </div>

        {newPosts && <NewPost newPosts={newPosts} />}
        <div className={styles.adsense}>
          <Adsense />
        </div>
        {tagList && <TagList tagList={tagList} />}
        <div className={styles.adsense}>
          <Adsense />
        </div>
        <Twitter />
        <div className={styles.adsense}>
          <Adsense />
        </div>
      </div>
    </aside>
  );
};

export default SideBar;
