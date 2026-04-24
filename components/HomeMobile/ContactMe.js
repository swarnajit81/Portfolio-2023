import { socialLinks } from "@utils/index";
import React from "react";
import { motion } from "framer-motion";

const ContactMe = () => {
  return (
    <div
      id="contact-mobile"
      className="pt-[5rem] pb-[2rem] flex flex-col items-center gap-[1.5rem]"
    >
      <motion.h3
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-center text-[8vw] uppercase"
      >
        Want to discuss a<br />{" "}
        <span className="italic font-bold font-playfair">new Project ?</span>
      </motion.h3>
      <motion.a
        href="mailto:swarnajit.bhowmick.81@gmail.com"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 0.6, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
        className="text-center mx-auto w-[minmax(200px , 100%)] rounded-[30px] py-[0.7rem] px-5 uppercase border-[1px] bg-royal-orange"
      >
        send me a mail
      </motion.a>
      <motion.img
        initial={{ opacity: 0, rotate: -90 }}
        whileInView={{ opacity: 1, rotate: 0 }}
        viewport={{ once: true, amount: 0.6 }}
        transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
        src="/images/s.svg"
        alt="logo"
        className="w-[80px]"
      />

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.5 }}
        transition={{ duration: 0.7, delay: 0.4 }}
        className="uppercase text-center text-[1.2rem]"
      >
        <p>Thanks for your visit!</p>
        <p className="text-[#afafaf]">you can check out my networks</p>
        <p className="text-[#afafaf]">to follow my new adventures!</p>
      </motion.div>
      <div className="text-[1rem] mt-[2rem] w-full justify-center uppercase flex flex-wrap items-center gap-[0.5rem]">
        {socialLinks.map((el, i) => (
          <motion.a
            key={i}
            rel="noreferrer"
            href={el.link}
            target="_blank"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.5 }}
            transition={{
              duration: 0.5,
              delay: 0.6 + i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
            whileHover={{ y: -3, color: "#ff5a1f" }}
          >
            {el.text}
          </motion.a>
        ))}
      </div>
    </div>
  );
};

export default ContactMe;
