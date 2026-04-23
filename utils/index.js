export const commonClasses = {
  parentContainer: `w-[200vw] h-screen flex flex-nowrap overflow-y-hidden`,
  panel: `w-[100vw] h-full`,
};

export const socialLinks = [
  { text: "Instagram", link: "https://www.instagram.com/__swarnajit__/" },
  {
    text: "Linkedin",
    link: "https://www.linkedin.com/in/swarnajit-bhowmick-66a7b5183/",
  },
  { text: "Facebook", link: "https://www.facebook.com/swarnajit.bhowmick/" },
  { text: "Twitter", link: "https://twitter.com/ScreaMSwarn" },
];

export const defaultTransition = {
  duration: 1.25,
  ease: [0.43, 0.13, 0.23, 0.96],
};

import { works } from "@data/works";

export const imageArr = works.map((w) => ({
  text: w.title,
  img: w.cover,
  link: w.link,
  slug: w.slug,
}));

const words = [
  "zero",
  "one",
  "two",
  "three",
  "four",
  "five",
  "six",
  "seven",
  "eight",
  "nine",
  "ten",
  "eleven",
  "twelve",
  "thirteen",
  "fourteen",
  "fifteen",
  "sixteen",
  "seventeen",
  "eighteen",
  "nineteen",
  "twenty",
  "twenty-one",
  "twenty-two",
  "twenty-three",
  "twenty-four",
  "twenty-five",
  "twenty-six",
  "twenty-seven",
  "twenty-eight",
  "twenty-nine",
  "thirty",
];

export const getMyAge = () => {
  return words[Number(new Date().getFullYear()) - 1998];
};
