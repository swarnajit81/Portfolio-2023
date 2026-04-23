import React from "react";
import Navbar from "./navbar.component";
import Preloader from "@components/Common/Preloader";
import Meta from "@components/Common/meta";
import PageTransition from "@components/Common/PageTransition";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="w-full overflow-x-hidden font-montreal ">
        <Preloader />
        <Navbar />
        <PageTransition />
        {children}
      </div>
    </>
  );
};

export default Layout;
