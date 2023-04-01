import React from "react";

const MoreAboutMe = ({ bottomMaqueeRef, MAMSection }) => {
  const getMaqueeText = (text) => {
    const textArr = [];
    for (let i = 0; i < 50; i++) {
      textArr.push(text);
    }
    return textArr;
  };
  const bottomMaquee = (
    <div className="w-full border-t-[1px] border-t-white absolute bottom-0 ">
      <div
        ref={bottomMaqueeRef}
        className="w-full py-[1rem] flex flex-nowrap whitespace-nowrap font-montreal"
      >
        {getMaqueeText("Benefits Stack &").map((el) => (
          <div className="text-[4vw] flex gap-[1vw]">
            <span className="pl-[1.5vw]">{el?.split(" ")[0]}</span>
            <span className="font font-playfair italic">
              {el?.split(" ")[1]}
            </span>
            <span className="font font-playfair italic">
              {el?.split(" ")[2]}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
  return (
    <div
      ref={MAMSection}
      className="w-full h-full relative overflow-hidden border-r-[1px] border-r-white
    "
    >
      <div className="w-[80%] relative  mx-auto h-full py-[15%] font-light flex flex-col justify-between">
        <p className="text-[1.4rem] max-w-[50rem] ">
          I usually work in vanilla javascript without frameworks for small
          projects, allowing me a complete freedom on the architecture, a
          Headless CMS like Starpi for content management, GSAP for animations
          and Three.js for WebGL. For bigger works I use Next.js with Prisma and
          tRPC.
        </p>
        <div className="flex flex-wrap gap-[2rem] itmes-start">
          {skills?.map((el, i) => (
            <div className="max-w-[25rem]">
              <div className="flex items-end text-royal-orange gap-[10px]">
                <span className="text-[1.2rem]">0{i + 1}.</span>
                <p className="text-[1.6rem] text-white uppercase">{el.title}</p>
              </div>
              <p className="mt-[1.5rem] text-[1.2rem] ">{el.para}</p>
            </div>
          ))}
        </div>
      </div>
      {bottomMaquee}
    </div>
  );
};

export default MoreAboutMe;

const skills = [
  {
    title: "Interaction",
    para: "A pleasant experience for your users goes through the animations and interactions of your project, I spend time to imagine and design them to ensure a smooth and remarkable navigation.",
  },
  {
    title: "performance",
    para: "On the web, every second counts, I pay particular attention to the performance of your project by respecting the best practices of every tool I use.",
  },
  {
    title: "Teamwork",
    para: "I develop your new website by listening to your needs and desires and by giving you my point of view in order to get the best for your project.",
  },
];
