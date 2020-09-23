import React from "react";
// import { Link } from "gatsby";

// import { rhythm, scale } from "../utils/typography";
// import { rhythm } from "../utils/typography";

import NavBar from "./navbar";
import Footer from "./footer";
import SideBar from "./sidebar";

const Layout = ({ location, title, author, children }) => {
  // const rootPath = `${__PATH_PREFIX__}/`;
  // let header;

  // if (location.pathname === rootPath) {
  //   header = (
  //     <h1
  //       style={{
  //         ...scale(1.5),
  //         marginBottom: rhythm(1.5),
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h1>
  //   );
  // } else {
  //   header = (
  //     <h3
  //       style={{
  //         fontFamily: `sans-serif`,
  //         marginTop: 0,
  //       }}
  //     >
  //       <Link
  //         style={{
  //           boxShadow: `none`,
  //           color: `inherit`,
  //         }}
  //         to={`/`}
  //       >
  //         {title}
  //       </Link>
  //     </h3>
  //   );
  // }
  return (
    <div>
      <NavBar />
      <div className="layout">
        {/* <header>{header}</header> */}
        <main className="main">{children}</main>
        <SideBar />
      </div>
      <Footer author={author} />
    </div>
  );
};

export default Layout;
