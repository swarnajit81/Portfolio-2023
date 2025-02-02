import React from "react";

const InfinteMarquee = () => {
  return (
    <div className="hidden lg:flex absolute left-1/2 -translate-x-1/2 w-[19rem] rounded-[20px] border-[1px] border-white overflow-hidden  py-2">
      <div
        key="first"
        className="flex items-baseline gap-[10px] whitespace-nowrap flex-nowrap  animate-marquee px-[5px]"
      >
        <div className="w-[10px] h-[10px]  bg-royal-orange rounded-full"></div>
        <h2 className="text-[1rem uppercase">available for freelance work</h2>
      </div>
      <div
        key="second"
        className="flex items-baseline gap-[10px] whitespace-nowrap flex-nowrap animate-marquee px-[5px]"
      >
        <div className="w-[10px] h-[10px] uppercase  bg-royal-orange rounded-full"></div>
        <h2 className="text-[1rem] uppercase">available for freelance work</h2>
      </div>
    </div>
  );
};

export default InfinteMarquee;
