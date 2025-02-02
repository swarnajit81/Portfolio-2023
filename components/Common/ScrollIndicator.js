import { imageArr } from "@utils/index";
import React, { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollIndicator = ({ isGridVisible }) => {
  const [activeIndex, setActiveIndex] = useState("");
  return (
    <AnimatePresence>
      {!isGridVisible && (
        <div className="fixed top-[5.5rem] flex left-[12rem]  -translate-x-1/2  z-[999]">
          {imageArr?.map((_, i) => (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{
                duration: 1,
              }}
              onClick={() => {
                setActiveIndex(i);
                const item = document.getElementById(`content-${i}`);
                const gridContainer = document.getElementById("grid-container");
                const itemLeft = item.offsetLeft;
                const itemWidth = item.offsetWidth;
                const containerWidth = gridContainer.clientWidth;

                // Calculate the scrollLeft position to center the item
                const scrollLeft = itemLeft - (containerWidth - itemWidth) / 2;
                gridContainer.scroll({
                  left: scrollLeft,
                  behavior: "smooth",
                });
              }}
              className={`cursor-pointer flex justify-center transition-all relative w-[20px]  h-[30px] rounded-[5px]`}
            >
              <span
                className={`${
                  activeIndex === i ? "w-full" : "w-[0px]"
                } border-[1px] h-full absolute border-white transition-all`}
              ></span>
            </motion.div>
          ))}
        </div>
      )}
    </AnimatePresence>
  );
};

export default ScrollIndicator;
