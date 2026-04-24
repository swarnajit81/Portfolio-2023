import React from "react";
import { motion } from "framer-motion";

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

  const headingWords = [
    { text: "Hey!", italic: true },
    { text: "I" },
    { text: "am" },
    { text: "Swarnajit," },
    { text: "a" },
    { text: "twenty-six" },
    { text: "years" },
    { text: "old", italic: true },
    { text: "front-end" },
    { text: "developer." },
    { text: "Currently" },
    { text: "based" },
    { text: "in", italic: true },
    { text: "France", strike: true },
    { text: "India." },
  ];

  return (
    <div id="about-mobile" className="w-full px-5">
      <h2 className="text-[12vw] leading-[1.05]">
        {headingWords.map((w, i) => (
          <span key={i} className="inline-block overflow-hidden align-bottom">
            <motion.span
              initial={{ y: "110%" }}
              whileInView={{ y: "0%" }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{
                duration: 0.8,
                delay: i * 0.05,
                ease: [0.76, 0, 0.24, 1],
              }}
              className={`inline-block mr-[0.25em] ${
                w.italic ? "font-playfair italic" : ""
              } ${w.strike ? "line-through decoration-royal-orange" : ""}`}
            >
              {w.text}
            </motion.span>
          </span>
        ))}
      </h2>
      <div
        style={{ textWrap: "balance" }}
        className="flex flex-col mt-[4rem] text-[1.2rem]  font-light gap-[3rem] "
      >
        {presonalityTraits.map((html, i) => (
          <motion.div
            key={i}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{
              duration: 0.8,
              delay: i * 0.08,
              ease: [0.22, 1, 0.36, 1],
            }}
          >
            {html}
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AboutSectionMobile;
