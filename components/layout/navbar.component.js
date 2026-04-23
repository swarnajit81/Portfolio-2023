import React, { useState } from "react";
import InfinteMarquee from "./InfinteMarquee";
import AnimatedText from "@components/Common/AnimatedText";
import Menu from "./Menu";
import {gsap} from 'gsap'
import  ScrollToPlugin  from "gsap/dist/ScrollToPlugin";
import { useRouter } from "next/router";

gsap.registerPlugin(ScrollToPlugin)

const Navbar = () => {
  const [isMenuOpend, setIsMenuOpend] = useState(false);
  const router = useRouter();
  const borderClasses = {
    0: "top-0 left-0",
    1: "top-1/2 -translate-y-1/2",
    2: "bottom-0 left-0",
  };

  const handleNavClick = (sectionId) => {
    if (router.pathname === "/") {
      const el = document.getElementById(sectionId);
      if (el) gsap.to(window, { scrollTo: el.offsetLeft + 500, duration: 1 });
    } else {
      router.push(`/?section=${sectionId}`);
    }
  };
  return (
    <div className="py-[1.9rem] w-full fixed top-0 left-0 px-4 text-[1rem] z-[100] font-regular border-b-[1px] bg-black ">
      <div className="w-full h-full flex justify-between items-center">
        <div className="absolute w-[40px]">
          <img
            src="/images/s.svg"
            className=" w-full h-full  left-[20px]  object-cover  mix-blend-screen"
          />
        </div>

        <InfinteMarquee />
        <div className=" hidden absolute right-0 lg:flex gap-[1.5rem] uppercase cursor-pointer">
          {links.map((el, i) => (
            <AnimatedText
              onClick={() => handleNavClick(el.link)}
              txt={el.text}
              key={i}
            />
          ))}
        </div>
        <div
          onClick={() => setIsMenuOpend(true)}
          className="w-[30px] lg:hidden  ml-auto  h-[20px] relative active:opacity-80"
        >
          {Array(3)
            .fill("")
            .map((_, i) => (
              <span
                className={`w-full  absolute h-[2px] bg-white   ${borderClasses[i]} `}
                key={i}
              ></span>
            ))}
        </div>
      </div>
      <Menu {...{ isMenuOpend, setIsMenuOpend }} />
    </div>
  );
};

export default Navbar;

const links = [
  {
    text: "projects",
    link: "work-section",
    scrambleId: "scramble-1",
  },
  {
    text: "about",
    link: "about-section",
    scrambleId: "scramble-2",
  },
  {
    text: "contact",
    link: "contact-section",
    scrambleId: "scramble-3",
  },
];
