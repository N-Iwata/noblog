import React from "react";
import Adsense from "./adsense";
import Bio from "./bio";
import Twitter from "./twitter";
import NewPost from "./newPost";
import TagList from "./tagList";

const SideBar = ({ new1, new2, new3, new4, new5, tagList }) => {
  return (
    <aside className="sidebar">
      <Bio />
      <Adsense />
      <Adsense />
      {new1 && new2 && new3 && new4 && new5 && (
        <NewPost new1={new1} new2={new2} new3={new3} new4={new4} new5={new5} />
      )}
      {tagList && <TagList tagList={tagList} />}
      <Twitter />
      <Adsense />
      <Adsense />
      <Adsense />
    </aside>
  );
};

export default SideBar;
