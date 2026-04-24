import React from "react";
import { motion } from "framer-motion";

const words = ["INDEPENDENT", "FRONT-END", "WEB", "DEVELOPER"];

const HomeTopMobile = () => {
  return (
    <div className="w-full min-h-screen px-5 relative flex flex-col justify-between overflow-hidden">
      <div className="flex flex-col pt-[10rem] relative">
        {words.map((char, i) => (
          <div key={i} className="overflow-hidden">
            <motion.p
              initial={{ y: "110%" }}
              animate={{ y: "0%" }}
              transition={{
                duration: 0.9,
                delay: 0.2 + i * 0.12,
                ease: [0.76, 0, 0.24, 1],
              }}
              className="text-[12vw] relative z-[10] mix-blend-difference"
            >
              {char}
            </motion.p>
          </div>
        ))}
      </div>
      <motion.img
        src="/images/cover.jpeg"
        alt="cover"
        initial={{ opacity: 0, scale: 1.15 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 1.4, delay: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className="w-auto object-cover top-[25%] h-[55%] absolute right-0"
      />
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 1.2 }}
        className="w-full h-[65px] py-[1rem] flex gap-[10px] justify-end"
      >
        <p className=" self-end uppercase block text-[10px]">
          Scroll to begin your journey
        </p>
        <div className="w-[20px] h-full border-[1px] rounded-full">
          <span className="w-full h-full mt-[5px]  animate-bounce grid place-items-center">
            <img
              src="/images/arrow-right.svg"
              alt="arrow-right"
              className="rotate-[90deg] w-[15px] invert"
            />
          </span>
        </div>
      </motion.div>
    </div>
  );
};

export default HomeTopMobile;
