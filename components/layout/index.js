import React from "react";
import Navbar from "./navbar.component";
import Preloader from "@components/Common/Preloader";
import Meta from "@components/Common/meta";

const Layout = ({ children }) => {
  return (
    <>
      <Meta />
      <div className="w-full overflow-x-hidden font-montreal ">
        <Preloader />
        <Navbar />
        {children}
      </div>
    </>
  );
};

export default Layout;
