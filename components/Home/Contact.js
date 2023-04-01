import { socialLinks } from "@utils/index";
import Link from "next/link";
import React, { useRef } from "react";

const Contact = ({ contactSection, header }) => {
  const text1 = useRef(null);
  const text2 = useRef(null);

  return (
    <div
      ref={contactSection}
      className="w-[95%] mx-auto relative  h-[100svh] font-montreal"
    >
      <h1
        id="header"
        ref={header}
        className="pt-[4rem] font-[400] text-[11.1vw] leading-[10vw]"
      >
        SwarnajitBhowmick
      </h1>
      <div
        style={{ lineHeight: "3.8vw", textCapi: "uppercase" }}
        className="text-[3.5vw] uppercase font-light text-[#fafafa] mt-[1rem] leading-0 "
      >
        <p>want to discuss</p>
        <p>a new project?</p>
      </div>
      <a href="mailto:swarnajit.bhowmick.81@gmail.com">
        <div className="mt-[5rem] hover:bg-royal-orange hover:text-white transition-all duration-300  px-[4rem] py-[2rem] font-playfair italic text-[2vw] border-[2px] rounded-[2rem] w-max cursor-pointer border-royal-orange text-royal-orange relative">
          <p id="text" className="leading-[0]">
            send me an email
          </p>
          <p id="text" className="leading-[0]">
            send me an email
          </p>
        </div>
      </a>
      <div className="absolute bottom-[13%] left-0 text-white font-montreal uppercase text-[1.2rem] font-normal ">
        <p>thanks for your visit!</p>
        <p className="text-[#afafaf]">you can check out my networks</p>
        <p className="text-[#afafaf]">to follow my new adventures!</p>
      </div>
      <div className="text-[1.2rem] uppercase flex flex-wrap items-center absolute bottom-10 left-0 gap-[1.5rem]">
        {socialLinks.map((el) => (
          <a href={el.link} target="_blank">
            {el.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Contact;
