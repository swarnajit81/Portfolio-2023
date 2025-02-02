import React from "react";

const AboutSectionMobile = () => {
  const presonalityTraits = [
    <p key={1}>
      I&apos;ve always been an artist, an admirer of mysticism and abstract
      arts. And creating immersive web experiences that leaves user itself in
      awe, is an art which has been justified. I thrive for that awe considering
      me being the artist and creator of such web canvas. As Nietzsche said ,{" "}
      <q>art is the highest form of self-expression and a way to affirm life</q>
    </p>,
    <p key={2}>
      I am a fan of new ideas and brainstorming it in an engaging way. After 4
      years of voluteering on different techstacks for IT firms, shaping and
      sharpening my problem solving and artistic ability, I have decided to help
      talented enthusiasts by providing a creative and refined solution
      independently.
    </p>,
    <p key={3}>
      For each project I work on, I pay particular attention to the interaction,
      animations and performance of your site, so that your users enjoy a
      pleasant experience throughout their visit.
    </p>,
    <p key={3}>
      Portfolio is just the beginning and a light pack, more to unveil and I
      can’t wait to push it even further by working with you on your next
      project.
    </p>,
  ];
  return (
    <div id="about-mobile" className="w-full px-5">
      <h2 class="text-[12vw]">
        <span className="font-playfair italic">Hey!</span> I am Swarnajit, a
        twenty-six years&nbsp;<span className="font-playfair italic">old</span>
        &nbsp; front-end developer. Currently based{" "}
        <span className="font-playfair italic">in</span>{" "}
        <span className=" line-through decoration-royal-orange">France</span>{" "}
        India.
      </h2>
      <div
        style={{ textWrap: "balance" }}
        className="flex flex-col mt-[4rem] text-[1.2rem]  font-light gap-[3rem] "
      >
        {presonalityTraits.map((html, i) => (
          <div key={i}>{html}</div>
        ))}
      </div>
    </div>
  );
};

export default AboutSectionMobile;
