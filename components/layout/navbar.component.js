import React from "react";
import InfinteMarquee from "./InfinteMarquee";

const Navbar = () => {
  return (
    <div className="py-[1.5rem] w-full fixed top-0 left-0 px-4 text-[1rem] z-[100] font-regular border-b-[1px] bg-black ">
      <div className="w-full h-full flex justify-between items-center">
        <h2 className="cursor-pointer">Swarnajit.</h2>
        <InfinteMarquee />
        <div className="flex gap-[1.5rem] uppercase cursor-pointer">
          {links.map((el) => (
            <h2>{el.text}</h2>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Navbar;

const links = [
  {
    text: "projects",
    link: "",
  },
  {
    text: "about",
    link: "",
  },
  {
    text: "contact",
    link: "",
  },
];
