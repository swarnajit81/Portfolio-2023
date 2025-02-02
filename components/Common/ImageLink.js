import React, { useContext, useEffect, useRef, useState } from "react";
import { motion } from "framer-motion";
import { AppContext } from "@context/AppContext";

const ImageLink = ({ index, elm }) => {
  const { setCursorStyle } = useContext(AppContext);
  const containerRef = useRef();

  const getRandomDelay = (min = 100, max = 500) => {
    return Math.ceil(Math.random() * (max - min) + min);
  };

  return (
    <div ref={containerRef} className="flex ">
      <div
        onMouseEnter={() => setCursorStyle("hovered")}
        onMouseLeave={() => setCursorStyle("")}
        className="w-full cursor-pointer flex-1 aspect-video relative"
      >
        <div className="group absolute w-full h-full grid overflow-hidden grid-cols-10    ">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${getRandomDelay()}ms` }}
              className={` bg-royal-orange/90 group-hover:opacity-0 transition-all duration-75 `}
            ></div>
          ))}
        </div>
        <img
          key={index}
          // layoutId={`image-${index}`}
          // transition={{ duration: 1.25, ease: [0.43, 0.13, 0.23, 0.96] }}
          className={`w-full h-full ${index}`}
          src={elm?.img}
        />
      </div>
      <p style={{ writingMode: "vertical-lr" }}>{elm.text}</p>
    </div>
  );
};

export default ImageLink;
