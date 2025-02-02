import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import React, { useRef } from "react";
// import ShaderImage from "../ShaderImage/ShaderImage";
import { gsap } from "gsap/dist/gsap";
import { Expo } from "gsap";
import dynamic from "next/dynamic";

const ShaderImage = dynamic(() => import("../ShaderImage/ShaderImage"), {
  ssr: false
})

const LandingSection = () => {
  const firstPara = useRef(null);
  const secondPara = useRef(null);
  const thirdPara = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.to(firstPara.current, {
      x: "-50%",
      duration: 1.5,
      delay: 0.5,
      ease: Expo.easeInOut,
    });
    gsap.to(secondPara.current, {
      x: "8%",
      duration: 1.5,
      delay: 0.5,
      ease: Expo.easeInOut,
    });
    gsap.to(thirdPara.current, {
      left: "50%",
      duration: 1.5,
      delay: 0.5,
      ease: Expo.easeInOut,
    });
  }, []);
  return (
    <div className="w-full h-full flex justify-center items-center font-montreal relative">
      <div className="flex pointer-events-none mix-blend-difference flex-col text-[7vw] items-center uppercase leading-[6.5vw] font-[500] z-10">
        <p>Independent</p>
        <p ref={firstPara}>front-end</p>
        <p ref={secondPara}>web developer</p>
        <div ref={thirdPara} className="text-[1.2vw] leading-[1.5vw] relative">
          {" "}
          Welcome to <span className="italic lowercase font-playfair">
            my
          </span>{" "}
          {new Date().getFullYear()} <span className="italic lowercase font-playfair">portfolio</span>
        </div>
      </div>

      <ShaderImage />
    </div>
  );
};

export default LandingSection;
