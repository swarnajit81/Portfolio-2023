import React from "react";
import Navbar from "./navbar.component";
import Preloader from "@components/Common/Preloader";

const Layout = ({ children }) => {
  return (
    <div className="w-full overflow-x-hidden font-montreal " >
      <Preloader />
      <Navbar />
      {children}
    </div>
  );
};

export default Layout;
