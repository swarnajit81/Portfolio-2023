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

export const imageArr = [
   {
    text: "The Rebellion",
    img: "/images/rebellion.png",
    link: "https://therebellionmgmt.com/"
  },

  {
    text: "WModels",
    img: "/images/wmgmt.png",
    link: "https://www.wmgmt.co.uk/"
  },
  {
    text: "Prodigy",
    img: "/images/prodigy.png",
    link: "https://www.prodigymanagement.com/"
  },
  {
    text: "Angels",
    img: "/images/angels.png",
    link: "https://www.angelsproject.com/"
  },
  {
    text: "City Models",
    img: "/images/citymodels.png",
    link: "https://www.city-models.com/",
  },

  {
    text: "IMG Models",
    img: "/images/imgmodels.png",
    link: "https://imgmodels.com/"
  },
  {
    text: "Lions",
    img: "/images/lions.png",
    link: "https://www.thelionsmanagement.com/"
  },
  {
    text: "Nevs",
    img: "/images/nevsmodels.png",
    url:"https://www.nevsmodels.co.uk/"
  },
  {
    text: "View Management",
    img: "/images/view.png",
    link: "https://www.viewmanagement.com/"
  },
 
];

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
