import React from "react";
import NavBar from "./navbar";
import Footer from "./footer";

const Layout = ({ location, title, author, children }) => {
  return (
    <div>
      <NavBar />
      <div className="layout">
        <main>{children}</main>
      </div>
      <Footer author={author} />
    </div>
  );
};

export default Layout;
