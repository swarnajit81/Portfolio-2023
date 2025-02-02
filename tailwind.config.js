/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],

  theme: {
    extend: {
      fontFamily: {
        lobster: ["Lobster"],
        playfair: ["Playfair"],
        montreal: ["Montreal"],
      },
      colors: {
        "royal-orange": "#D83503",
      },
      keyframes: {
        fadeIn: {
          "0%": {
            opacity: 0,
          },
          "100%": {
            opacity: 1,
          },
        },

        marquee: {
          "0%": {
            transform: "translate(0, 0)",
          },
          "100%": {
            transform: "translate(-100%, 0)",
          },
        },

        blur: {
          "0%": { filter: "blur(5px)" },
          "100%": { filter: "blur(0px)" },
        },
        "spin-slow": {
          "from" : {
            transform: "rotate(0deg)"
          },
          "to": {
            transform: "rotate(360deg)"
          }
        },
      },
      animation: {
        fadeIn: "fadeIn 300ms",
        blur: "blur 0.3s linear",
        marquee: "marquee 10s linear infinite",
        "spin-slow": "spin-slow 10s linear infinite"
      },
    },
  },
};
