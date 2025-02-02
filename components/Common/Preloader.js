import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import React, { useRef } from "react";
import { gsap } from "gsap";
import { Expo } from "gsap";

const Preloader = () => {
  const preloaderRef = useRef(null);
  const preLoaderDivRef = useRef(null);

  useIsomorphicLayoutEffect(() => {
    gsap.to(preloaderRef.current, {
      x: "-100%",
      duration: 1.5,
      delay: 0.5,
      ease: Expo.easeInOut,
    });
    gsap.to(preLoaderDivRef.current, {
      width: "30%",
      duration: 1.5,
      delay: 0.5,
      ease: Expo.easeInOut,
    });
  }, []);
  return (
    <div
      ref={preloaderRef}
      className="w-screen h-screen will-change-transform top-0 left-0 fixed bg-black z-[999] flex justify-end"
    >
      <div
        ref={preLoaderDivRef}
        className="w-0 will-change-transform bg-royal-orange h-full"
      ></div>
    </div>
  );
};

export default Preloader;
