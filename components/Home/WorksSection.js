import Header from "@components/Common/Header";
import ImageLink from "@components/Common/ImageLink";
import RevealImage from "@components/Common/RevealImage";
import VerticleMarquee from "@components/Common/VerticleMarquee";
import { defaultTransition } from "@utils/index";
import { useMotionValue, motion, useSpring } from "framer-motion";
import React, { useRef, useState } from "react";

const WorksSection = ({
  firstLineRef,
  secondLineRef,
  image,
  imageContainer,
}) => {
  const workSectionRef = useRef(null);
  const [gridIsVisible, setGridIsVisible] = useState(true);
  const gridRef = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const handleMouseMove = (e) => {
    if (gridRef?.current) {
      const speed = -10;
      const { width, height } = gridRef.current.getBoundingClientRect();
      const offsetX = e.pageX - width * 0.22;
      const offsetY = e.pageY - height * 1.3;

      const newTransformX = (offsetX * speed) / 15;
      const newTransformY = (offsetY * speed) / 50;

      x.set(newTransformX);
      y.set(newTransformY);
    }
  };

  const xMotion = useSpring(x, { stiffness: 400, damping: 90 });
  const yMotion = useSpring(y, { stiffness: 400, damping: 90 });

  // function getRandomInt(min, max) {
  //   min = Math.ceil(min);
  //   max = Math.floor(max);
  //   return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
  // }

  const positionClasses = [
    "top-[50vh] left-[10vw]",
    "top-[15vh] left-[50vw]",
    "top-[60vh] left-[60vw]",
    "top-[20vh] left-[20vw]",
    "top-[45vh] left-[70vw]",
    "top-[80vh] left-[30vw]",
    "top-[20vh] left-[80vw]",
  ];

  return (
    <div
      ref={workSectionRef}
      style={{ contentVisibility: "auto" }}
      className="w-screen  h-[calc(1vh*100)] transition-all duration-500 uppercase overflow-hidden relative font-montreal"
    >
      <Header view={gridIsVisible} toggleView={setGridIsVisible} />
      {/* {imageArr?.map((el, i) => (
        <div
          id="image"
          style={{ perspective: "3000px" , transform: `rotate(${getRandomInt(-30 , 30)}deg)` }}
          className={` ${positionClasses[i]} absolute  ${i === 2 ? "w-[8%]" : "w-[15%]"} h-auto  group  `}
        >
          <p className="absolute top-[-1.6rem] left-0" >
            {el.text}
          </p>
          <img
            src={el.img}
            alt="images"
            style={{transformOrigin: "left center"}}
            className="w-full h-full  group-hover:scale-110 cursor-pointer  transition-all duration-300"
          />
        </div>
      ))} */}
      {gridIsVisible && (
        <motion.div
          ref={gridRef}
          onMouseMove={handleMouseMove}
          transition={defaultTransition}
          style={{ contentVisibility: "auto", x: xMotion, y: yMotion }}
          className="flex items-center justify-center absolute w-[250vw] h-[210vh] top-[calc(((1vh*100)-210vh)/2)] left-[calc((100vw-250vw)/2)] "
        >
          <div className="grid grid-cols-5">
            {imageArr?.map((el, index) => (
              <div key={index} className="w-[25vw] px-[5vh] py-[4vh] h-[40vh]">
                <div className=" w-full h-full relative">
                  <ImageLink elm={el} index={index} />
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      )}
      {!gridIsVisible && (
        <div
          style={{
            display: "grid",
            gridTemplateColumns: `repeat(${imageArr?.length} , 1fr)`,
          }}
          className={`h-[calc(1vh*100)] items-center overflow-x-auto overflow-y-hidden px-[10vmin]`}
        >
          {imageArr?.map((el, index) => (
            <div key={index} className="w-[70vmin] h-[70vmin] mx-[5vw]">
              <ImageLink elm={el} index={index} />
            </div>
          ))}
        </div>
      )}

      <div
        style={{ position: "absolute" }}
        className="aboslute h-full left-0 top-0 bg-black"
      >
        <VerticleMarquee workSectionRef={workSectionRef} />
      </div>
      <div className="mix-blend-difference text-[7vw] absolute w-full h-full  pointer-events-none flex justify-center items-center  top-0 left-0 leading-[6.5vw]">
        <div className="flex flex-col">
          <h2 ref={firstLineRef}>Selected</h2>
          <h2 ref={secondLineRef} className="font-playfair italic">
            Works
          </h2>
        </div>
      </div>
    </div>
  );
};

export default WorksSection;

const images = [
  "/images/angels.png",
  "/images/citymodels.png",
  "/images/fourmodels.jpg",
  "/images/imgmodels.png",
  "/images/lions.png",
  "/images/nevsmodels.png",
  "/images/view.png",
];

const imageArr = [
  {
    text: "Angels",
    img: "/images/angels.png",
  },
  {
    text: "City Models",
    img: "/images/citymodels.png",
  },
  {
    text: "Four models",
    img: "/images/fourmodels.jpg",
  },
  {
    text: "IMG Models",
    img: "/images/imgmodels.png",
  },
  {
    text: "Lions",
    img: "/images/lions.png",
  },
  {
    text: "Nevs",
    img: "/images/nevsmodels.png",
  },
  {
    text: "View Management",
    img: "/images/view.png",
  },
  {
    text: "Angels",
    img: "/images/angels.png",
  },
  {
    text: "City Models",
    img: "/images/citymodels.png",
  },
  {
    text: "Four models",
    img: "/images/fourmodels.jpg",
  },
  {
    text: "IMG Models",
    img: "/images/imgmodels.png",
  },
  {
    text: "Lions",
    img: "/images/lions.png",
  },
  {
    text: "Nevs",
    img: "/images/nevsmodels.png",
  },
  {
    text: "View Management",
    img: "/images/view.png",
  },
];
