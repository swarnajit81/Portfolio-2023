import React, { useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/dist/ScrollTrigger";
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";

gsap.registerPlugin(ScrollTrigger);

const VerticleMarquee = ({ workSectionRef }) => {
  const marqueeLeft = useRef(null);
  const marqueeRight = useRef(null);
  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(marqueeRight.current, { y: "-1000" });
      let tween = gsap
        .to("#marqueeLeft", {
          yPercent: -208,
          repeat: -1,
          duration: 10,
          ease: "linear",
        })
        .totalProgress(0.3);

      let reverseTween = gsap
        .to("#marqueeRight", {
          yPercent: 208,
          repeat: -1,
          duration: 10,
          ease: "linear",
        })
        .totalProgress(0.3);
      // .totalProgress(0.3);
    });

    return () => ctx.revert();
  }, []);

  const generateMarquee = (text) => {
    let marqueeArr = [];
    for (let i = 0; i < 10; i++) {
      marqueeArr.push(text);
    }

    return marqueeArr;
  };

  const marqueeLeftArr = generateMarquee("swarnajit 2023portfolio");
  const marqueeRightArr = generateMarquee("swarnajit 2023portfolio");

  return (
    <div className=" h-full border-x-[1px] border-x-[white] uppercase  font-montreal flex gap-[0.5px] px-[0.5rem] text-[2rem] w-max">
      <div
        ref={marqueeLeft}
        className="flex flex-col gap-[15px] odd:text-royal-orange even:text-white"
      >
        {marqueeLeftArr.map((el) => (
          <div id="marqueeLeft" className="flex gap-[15px] flex-col">
            <span className="text-white" style={{ writingMode: "vertical-rl" }}>
              {el.split(" ")[0]}
            </span>
            <span
              className="text-royal-orange"
              style={{ writingMode: "vertical-rl" }}
            >
              {el.split(" ")[1]}
            </span>
          </div>
        ))}
      </div>
      <div
        ref={marqueeRight}
        className="flex flex-col gap-[15px] even:text-royal-orange odd:text-white"
      >
        {marqueeRightArr.map((el) => (
          <div id="marqueeRight" className="flex gap-[15px] flex-col">
            <span
              className="text-royal-orange"
              style={{ writingMode: "vertical-rl" }}
            >
              {el.split(" ")[0]}
            </span>
            <span className="text-white" style={{ writingMode: "vertical-rl" }}>
              {el.split(" ")[1]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default VerticleMarquee;
