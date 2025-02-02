import React from "react";

const HomeTopMobile = () => {
  return (
    <div className="w-full min-h-screen px-5 relative flex flex-col justify-between">
      <div className="flex flex-col pt-[10rem] relative">
        {[`INDEPENDENT`, `FRONT-END`, `WEB`, "DEVELOPER"].map((char, i) => (
          <p
            //   style={{fontSize: "clamp()"}}
            className="text-[12vw] relative z-[10] mix-blend-difference"
            key={i}
          >
            {char}
          </p>
        ))}
      </div>
      <img
        src="/images/cover.jpeg"
        alt="cover"
        className="w-auto object-cover top-[25%] h-[55%] absolute right-0"
      />
      <div className="w-full h-[65px] py-[1rem] flex gap-[10px] justify-end">
        <p className=" self-end uppercase block text-[10px]">
          Scroll to begin your journey
        </p>
        <div className="w-[20px] h-full border-[1px] rounded-full">
          <span className="w-full h-full mt-[5px]  animate-bounce grid place-items-center">
            <img
              src="/images/arrow-right.svg"
              alt="arrow-right"
              className="rotate-[90deg] w-[15px] invert"
            />
          </span>
        </div>
      </div>
    </div>
  );
};

export default HomeTopMobile;
