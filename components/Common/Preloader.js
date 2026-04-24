import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import React, { useContext, useEffect, useRef, useState } from "react";
import { gsap } from "gsap";
import { Expo } from "gsap";
import { AppContext } from "@context/AppContext";

const FALLBACK_MS = 6000;

const Preloader = () => {
  const preloaderRef = useRef(null);
  const preLoaderDivRef = useRef(null);
  const counterRef = useRef(null);
  const creepRef = useRef(null);
  const counterTweenRef = useRef(null);
  const progressRef = useRef({ value: 0 });
  const firedRef = useRef(false);

  const { shaderReady } = useContext(AppContext);
  const [isDesktop, setIsDesktop] = useState(false);

  useEffect(() => {
    setIsDesktop(window.matchMedia("(min-width: 1024px)").matches);
  }, []);

  useIsomorphicLayoutEffect(() => {
    creepRef.current = gsap.to(preLoaderDivRef.current, {
      width: "70%",
      duration: 4,
      ease: "power1.out",
    });

    counterTweenRef.current = gsap.to(progressRef.current, {
      value: 70,
      duration: 4,
      ease: "power1.out",
      onUpdate: () => {
        if (counterRef.current) {
          counterRef.current.textContent = String(
            Math.floor(progressRef.current.value)
          ).padStart(3, "0");
        }
      },
    });
  }, []);

  useEffect(() => {
    const run = () => {
      if (firedRef.current) return;
      firedRef.current = true;
      if (creepRef.current) creepRef.current.kill();
      if (counterTweenRef.current) counterTweenRef.current.kill();

      gsap.to(progressRef.current, {
        value: 100,
        duration: 0.5,
        ease: "power2.out",
        onUpdate: () => {
          if (counterRef.current) {
            counterRef.current.textContent = String(
              Math.floor(progressRef.current.value)
            ).padStart(3, "0");
          }
        },
      });

      gsap.to(preLoaderDivRef.current, {
        width: "100%",
        duration: 0.5,
        ease: "power2.out",
        onComplete: () => {
          gsap.to(preloaderRef.current, {
            x: "-100%",
            duration: 1.2,
            delay: 0.25,
            ease: Expo.easeInOut,
          });
        },
      });
    };

    if (!isDesktop) {
      const t = setTimeout(run, 1400);
      return () => clearTimeout(t);
    }

    if (shaderReady) {
      run();
      return;
    }

    const t = setTimeout(run, FALLBACK_MS);
    return () => clearTimeout(t);
  }, [shaderReady, isDesktop]);

  const year = new Date().getFullYear();

  return (
    <div
      ref={preloaderRef}
      className="w-screen h-screen will-change-transform top-0 left-0 fixed bg-black z-[999] text-white font-montreal overflow-hidden"
    >
      <div className="absolute inset-0 flex flex-col justify-between p-6 md:p-10">
        <div className="flex justify-between items-start uppercase text-[0.7rem] md:text-[0.8rem] tracking-[0.15em]">
          <div className="flex flex-col gap-1">
            <span className="text-[#afafaf]">© {year}</span>
            <span>Swarnajit Bhowmick</span>
          </div>
          <div className="flex flex-col items-end gap-1">
            <span className="text-[#afafaf]">Portfolio</span>
            <span>
              v<span className="font-playfair italic normal-case">{year}</span>
            </span>
          </div>
        </div>

        <div className="flex flex-col items-center gap-4 md:gap-6">
          <span className="uppercase text-[0.7rem] md:text-[0.8rem] tracking-[0.3em] text-[#afafaf]">
            Loading Experience
          </span>
          <h1 className="text-[14vw] md:text-[9vw] leading-[1] uppercase text-center font-[500]">
            Crafting <span className="font-playfair italic">pixels</span>
          </h1>
        </div>

        <div className="flex justify-between items-end uppercase text-[0.7rem] md:text-[0.8rem] tracking-[0.15em]">
          <div className="flex flex-col gap-1">
            <span className="text-[#afafaf]">Based in</span>
            <span>India — IN</span>
          </div>
          <div className="flex items-baseline gap-2">
            <span
              ref={counterRef}
              className="text-[2.2rem] md:text-[3rem] leading-[1] font-[500] tabular-nums"
            >
              000
            </span>
            <span className="text-royal-orange text-[1rem] md:text-[1.2rem]">
              %
            </span>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 w-full h-[2px]">
        <div
          ref={preLoaderDivRef}
          className="w-0 will-change-transform bg-royal-orange h-full"
        ></div>
      </div>
    </div>
  );
};

export default Preloader;
