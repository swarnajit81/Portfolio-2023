import React from "react";

const AboutMe = () => {
  return (
    <div className="w-full h-full border-r-[2px] border-r-white">
      <div className="w-[80%] mx-auto text-[1.4rem] h-full">
        <div className="w-full max-w-[50rem] pt-[20%]">
          <p>
            I've always wanted to create new things, unique experiences, getting
            into web development changed a lot of things for me, and since then,
            I try to push my work to new horizons with each project, always
            putting quality first.
          </p>
        </div>
        <div className="max-w-[30rem] ml-auto mt-auto flex items-end h-[60svh]">
          <p>
            After working 3 years at Boardriders headquarters, I now decide to
            go freelance to work on new and exciting ideas surrounded by
            talented people.
            <br />
            <br /> For each project I work on, I pay particular attention to the
            interaction, animations and performance of your site, so that your
            users enjoy a pleasant experience throughout their visit.
            <br />
            <br />
            All this is just the beginning, and I can’t wait to push it even
            further by working with you on your next project.
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
