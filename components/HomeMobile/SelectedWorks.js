import { imageArr } from "@utils/index";
import Link from "next/link";
import React, { useEffect, useRef, useState } from "react";
import { ArrowRight } from "react-feather";
import { motion } from "framer-motion";

const SelectedWorks = () => {
  return (
    <div id="work-mobile" className="w-full min-h-screen px-5">
      <motion.p
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.4 }}
        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
        className="text-[12vw] uppercase text-center"
      >
        Selected <br /> <span className="font-playfair italic">Works</span>
      </motion.p>
      <div className="grid grid-col-1 gap-[4rem] mt-[4rem]">
        {imageArr.map((elm, i) => (
          <WorkCard key={i} elm={elm} index={i} />
        ))}
      </div>
    </div>
  );
};

export default SelectedWorks;

const WorkCard = ({ elm, index }) => {
  const [isVisible, setIsVisible] = useState(false);
  const imageContainer = useRef(null);
  const observerRef = useRef(null);

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
  }, []);

  return (
    <Link href={`/work/${elm.slug}`} legacyBehavior>
      <motion.a
        ref={imageContainer}
        key={elm.text}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{
          duration: 0.8,
          delay: (index % 3) * 0.1,
          ease: [0.22, 1, 0.36, 1],
        }}
        whileTap={{ scale: 0.98 }}
        className="w-full flex flex-col gap-[1rem] uppercase"
      >
        <span>{elm.text}</span>
        <div className="w-full h-auto relative overflow-hidden">
          <div className="absolute inset-0 grid grid-cols-10 overflow-hidden z-[2]">
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
          <motion.img
            initial={{ scale: 1.2 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true, amount: 0.25 }}
            transition={{ duration: 1.4, ease: [0.22, 1, 0.36, 1] }}
            className="w-full h-auto"
            src={elm?.img}
          />
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
      </motion.a>
    </Link>
  );
};
