import React, { useEffect, useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const RevealImage = ({ imageContainer, image }) => {
  const imageLayer = useRef(null);

  return (
    <div
      ref={imageContainer}
      className="w-[20%] h-auto relative overflow-hidden "
    >
      <img
        style={{ transformOrigin: "left" }}
        ref={image}
        className="w-full  h-auto object-cover  origin-left"
        src="/images/angels.png"
      />
    </div>
  );
};

export default RevealImage;
