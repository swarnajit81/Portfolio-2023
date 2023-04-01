import React , {useRef} from "react";
import {gsap} from 'gsap'
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";


const AboutSection = ({firstSent , secondSent , aboutSectionRef , aboutImageRef}) => {
   const marquee = useRef(null)
  const generateMarquee = (text) => {
    let marqueeArr = [];
    for (let i = 0; i < 10; i++) {
      marqueeArr.push(text);
    }

    return marqueeArr;
  };

  useIsomorphicLayoutEffect(() => {
    const ctx = gsap.context(() => {
      gsap.set(marquee.current, { y: "-1000" });
      let tween = gsap
        .to("#aboutMarquee", {
          yPercent: -208,
          repeat: -1,
          duration: 10,
          ease: "linear",
        })
        .totalProgress(0.3);

    });

    return () => ctx.revert();
  }, []);

  const aboutMarquee = generateMarquee("Know more about me.");

  return (
    <div ref={aboutSectionRef} className="w-full h-full flex items-center relative">
      <div className="absolute left-0 top-0 h-full border-x-[1px] border-x-[white] uppercase whitespace-nowrap flex-nowrap gap-[15px]  flex flex-col font-montreal px-[0.5rem] text-[2rem] w-max">
        {aboutMarquee.map((el) => (
          <span id="aboutMarquee" className="text-white text-[1.4rem]" style={{ writingMode: "vertical-rl" }}>
            {el}
          </span>
        ))}
      </div>
      <div className="pl-[25rem] mix-blend- mix-blend-difference text-[7rem] font-montreal " >
        <p ref={firstSent}> <span className="font-playfair italic" >Hey!</span> I'm Swarnajit </p>
        <p>a twenty-five years  <span className="font-playfair italic" >old</span></p>
        <p   ref={secondSent} >front-end developer. Currently</p>
        <p>based in <s>France</s> India</p>
      </div>
      <div className=" overflow-hidden absolute border-r-[5px] border-r-royal-orange right-0 top-0 h-screen w-[45vw] z-[-1]" >
        <img ref={aboutImageRef}   src="/images/cover.jpeg"  className="w-full h-full z-[-1] object-cover" alt="" />
      </div>
    </div>
  );
};

export default AboutSection;
