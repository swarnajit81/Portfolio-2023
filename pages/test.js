import React, { useRef, useEffect } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

const test = () => {
  const containerRef = useRef(null);
  useEffect(() => {
    let sections = gsap.utils.toArray("#section");
    let maxWidth;

    const ctx = gsap.context(() => {
      const getMaxWidth = () => {
        maxWidth = 0;
        sections.forEach((section) => {
          maxWidth += section.offsetWidth;
        });
      };

      getMaxWidth();

      gsap.to(sections, {
        x: () => `-${maxWidth - window.innerWidth}`,
        ease: "none",
        scrollTrigger: {
          trigger: containerRef.current,
          pin: true,
          scrub: 1,

          // base vertical scrolling on how wide the container is so it feels more natural.
          snap: false,
          end: () => `+=${maxWidth}`,
          invalidateOnRefresh: true,
        },
      });
    }, containerRef.current);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <div
      ref={containerRef}
      className="w-[300vw] flex flex-nowrap overscroll-none overflow-hidden h-screen"
    >
      <div id="section" className="w-[100vw] bg-red-300 relative"></div>
      <div id="section" className="w-[150vw] relative bg-yellow-300"></div>
    </div>
  );
};

export default test;
