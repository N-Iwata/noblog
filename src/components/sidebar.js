import React from "react";
import Adsense from "./adsense";
import Bio from "./bio";

const SideBar = () => {
  return (
    <aside className="sidebar">
      <Bio />
      <Adsense />
    </aside>
  );
};

export default SideBar;
