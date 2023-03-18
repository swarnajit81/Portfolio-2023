import React from "react";

const AboutSection = () => {
  const generateMarquee = (text) => {
    let marqueeArr = [];
    for (let i = 0; i < 10; i++) {
      marqueeArr.push(text);
    }

    return marqueeArr;
  };

  const aboutMarquee = generateMarquee("Know more about me.");

  return (
    <div className="w-full h-full relative">
      <div className="asolute left-0 top-0 h-full border-x-[1px] border-x-[white] uppercase whitespace-nowrap flex-nowrap gap-[15px]  flex flex-col font-montreal px-[0.5rem] text-[2rem] w-max">
        {aboutMarquee.map((el) => (
          <span className="text-white" style={{ writingMode: "vertical-rl" }}>
            {el}
          </span>
        ))}
      </div>
    </div>
  );
};

export default AboutSection;
