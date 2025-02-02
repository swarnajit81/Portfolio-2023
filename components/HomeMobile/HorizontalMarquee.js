import React from "react";

const HorizontalMarquee = ({marqueeText}) => {
  
  return (
    <div className="w-full h-[50px] border-t-[1px] overflow-hidden border-b-[1px] border-white my-[2rem] flex justify-between gap-[10px] items-center">
      {Array(10)
        .fill("")
        .map((_, index) => {
          return (
            <div
              className="shrink-0 text-[1.5rem] flex gap-[10px] scroll"
              key={index}
            >
              {marqueeText.split("  ").map((el, i) => (
                <span
                  className={` uppercase ${i === 0 ? "text-royal-orange" : ""}`}
                  key={i}
                >
                  {el}
                </span>
              ))}
            </div>
          );
        })}
    </div>
  );
};

export default HorizontalMarquee;
