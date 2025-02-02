import { imageArr } from "@utils/index";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "react-feather";

const SelectedWorks = () => {
  return (
    <div className="w-full min-h-screen px-5">
      <p className="text-[12vw] uppercase text-center">
        Selected <br /> <span className="font-playfair italic">Works</span>
      </p>
      <div className="grid grid-col-1 gap-[4rem] mt-[4rem]">
        {imageArr.map((elm, i) => (
          <WorkCard key={i} elm={elm} />
        ))}
      </div>
    </div>
  );
};

export default SelectedWorks;

const WorkCard = ({ elm }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageContainer = useRef(null);
  const observerRef = useRef(null); // Store observer instance

  const getRandomDelay = (min = 10, max = 500) => {
    return Math.random() * (max - min) + min;
  };

  const options = { threshold: 1.0 };

  useEffect(() => {
    const observer = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) setIsVisible(true);
    }, options);

    const currentElement = imageContainer.current;
    if (currentElement) {
      observer.observe(currentElement);
    }

    observerRef.current = observer;

    return () => {
      if (observerRef.current && currentElement) {
        observerRef.current.unobserve(currentElement);
        observerRef.current.disconnect();
      }
    };
  }, []); // Remove `isVisible` from dependencies

  return (
    <div
      ref={imageContainer}
      key={elm.text}
      className="w-full flex flex-col gap-[1rem] uppercase"
    >
      <span>{elm.text}</span>
      <div className="w-full h-auto relative">
        <div className="absolute inset-0 grid grid-cols-10 overflow-hidden">
          {[...Array(50)].map((_, i) => (
            <div
              key={i}
              style={{ transitionDelay: `${getRandomDelay()}ms` }}
              className={`${
                isVisible ? "opacity-0" : "opacity-100"
              } bg-royal-orange transition-all duration-75 `}
            ></div>
          ))}
        </div>
        <img className="w-full h-auto" src={elm?.img} />
      </div>
      <div className="uppercase">
        <div
          style={{ float: "inline-end" }}
          className="ml-[1rem] flow flex items-center gap-2"
        >
          see work
          <ArrowRight />
        </div>
      </div>
    </div>
  );
};
