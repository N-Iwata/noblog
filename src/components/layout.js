import React from "react";
// import { Link } from "gatsby";

// import { rhythm, scale } from "../utils/typography";
import { rhythm } from "../utils/typography";

import NavBar from "./navbar";
import Footer from "./footer";

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
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          marginTop: 20,
          maxWidth: rhythm(30),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
          backgroundColor: `#fff`,
          boxShadow: `0 0 10px rgba(0,0,0,0.2)`,
        }}
      >
        {/* <header>{header}</header> */}
        <main>{children}</main>
      </div>
      <Footer author={author} />
    </div>
  );
};

export default Layout;
