import RevealImage from "@components/Common/RevealImage";
import VerticleMarquee from "@components/Common/VerticleMarquee";
import useIsomorphicLayoutEffect from "@hooks/useIsomorphicLayoutEffect";
import React, { useRef } from "react";

const WorksSection = ({
  firstLineRef,
  secondLineRef,
  image,
  imageContainer,
}) => {
  const workSectionRef = useRef(null);

  function getRandomInt(min, max) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min) + min); // The maximum is exclusive and the minimum is inclusive
}

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
      className="w-full h-full uppercase relative font-montreal"
    >
      {imageArr?.map((el, i) => (
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
      ))}

      <div className="aboslute h-full left-0 top-0">
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

const imageArr  = [
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
]
