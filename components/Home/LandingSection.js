import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import React, { useRef } from "react";
import { gsap } from "gsap/dist/gsap";
import dynamic from "next/dynamic";

const ShaderImage = dynamic(() => import("../ShaderImage/ShaderImage"), {
  ssr: false,
});

const LandingSection = () => {
  const firstPara = useRef(null);
  const secondPara = useRef(null);
  const thirdPara = useRef(null);
  const line1 = useRef(null);

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      // Editorial line-reveal: text slides up from behind overflow mask
      gsap.from([line1.current, firstPara.current, secondPara.current], {
        yPercent: 110,
        duration: 1.4,
        stagger: 0.1,
        ease: "expo.out",
        delay: 0.2,
      });

      // Slide lines to their offset positions simultaneously
      gsap.to(firstPara.current, {
        x: "-50%",
        duration: 1.6,
        delay: 0.2,
        ease: "expo.inOut",
      });
      gsap.to(secondPara.current, {
        x: "8%",
        duration: 1.6,
        delay: 0.2,
        ease: "expo.inOut",
      });

      // Subtitle fade + drift up
      gsap.from(thirdPara.current, {
        autoAlpha: 0,
        y: 16,
        duration: 1,
        delay: 0.9,
        ease: "expo.out",
      });
      gsap.to(thirdPara.current, {
        left: "50%",
        duration: 1.6,
        delay: 0.2,
        ease: "expo.inOut",
      });
    });

    return () => ctx.revert();
  }, []);

  return (
    <div className="w-full h-full flex justify-center items-center font-montreal relative">
      <div className="flex pointer-events-none mix-blend-difference flex-col text-[7vw] items-center uppercase leading-[6.5vw] font-[500] z-10">
        <div className="overflow-hidden">
          <p ref={line1}>Independent</p>
        </div>
        <div className="overflow-hidden">
          <p ref={firstPara}>front-end</p>
        </div>
        <div className="overflow-hidden">
          <p ref={secondPara}>web developer</p>
        </div>
        <div ref={thirdPara} className="text-[1.2vw] leading-[1.5vw] relative">
          {" "}
          Welcome to{" "}
          <span className="italic lowercase font-playfair">my</span>{" "}
          {new Date().getFullYear()}{" "}
          <span className="italic lowercase font-playfair">portfolio</span>
        </div>
      </div>

      <ShaderImage />
    </div>
  );
};

export default LandingSection;
