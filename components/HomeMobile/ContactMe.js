import { socialLinks } from "@utils/index";
import React from "react";

const ContactMe = () => {
  return (
    <div className="pt-[5rem] pb-[2rem] flex flex-col items-center gap-[1.5rem]">
      <h3 className="text-center text-[8vw] uppercase">
        Want to discuss a<br />{" "}
        <span className="italic font-bold font-playfair">new Project ?</span>
      </h3>
      <a
        href="mailto:admin@swarnajit.xyz"
        className="text-center mx-auto w-[minmax(200px , 100%)] rounded-[30px] py-[0.7rem] px-5 uppercase border-[1px] bg-royal-orange"
      >
        send me a mail
      </a>
      <img src="/images/s.svg" alt="logo" className="w-[80px]" />

      <div className="uppercase text-center text-[1.2rem]">
        <p>Thanks for your visit!</p>
        <p class="text-[#afafaf]">you can check out my networks</p>
        <p class="text-[#afafaf]">to follow my new adventures!</p>
      </div>
      <div className="text-[1rem] mt-[2rem] w-full justify-center uppercase flex flex-wrap items-center gap-[0.5rem]">
        {socialLinks.map((el, i) => (
          <a key={i} rel="noreferrer" href={el.link} target="_blank">
            {el.text}
          </a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
