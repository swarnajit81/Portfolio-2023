import React, { useState } from "react";

const AnimatedText = ({ txt  , ...props }) => {
  const [text, setText] = useState(txt);
  const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";

  const onTextChange = () => {
    let iterations = 0;
    const interval = setInterval(() => {
      const distortedWords = txt
        .split("")
        .map((letter, index) => {
          if (index < iterations) {
            return txt[index];
          }
          return letters[Math.floor(Math.random() * 26)];
        })
        .join("");

      setText(distortedWords);
      if (iterations >= 9) clearInterval(interval);

      iterations += 1;
    }, 100);
  };

  return (
    <span {...props} className="w-[100px] text-center" onMouseEnter={onTextChange}>
      {text}
    </span>
  );
};

export default AnimatedText;
