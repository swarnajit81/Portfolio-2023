import { imageArr } from "@utils/index";
import React from "react";
import { ArrowRight } from "react-feather";

const SelectedWorks = () => {
  return (
    <div className="w-full min-h-screen px-5">
      <p className="text-[12vw] uppercase text-center">
        Selected <br /> <span className="font-playfair italic">Works</span>
      </p>
      <div className="grid grid-col-1 gap-[4rem] mt-[4rem]">
        <WorkCard />
      </div>
    </div>
  );
};

export default SelectedWorks;

const WorkCard = () => {
  return imageArr.map((elm) => (
    <div key={elm.text} className="w-full flex flex-col gap-[1rem] uppercase">
      <span>{elm.text}</span>
      <img className="w-full h-auto" src={elm?.img} />
      <div className="uppercase">
        <div
          style={{ float: "inline-end" }}
          className=" ml-[1rem] flow flex items-center gap-2"
        >
          see work
          <ArrowRight />
        </div>
      </div>
    </div>
  ));
};
