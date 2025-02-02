import { AppContext } from "@context/AppContext";
import { useState, useEffect, useContext } from "react";
import {motion} from 'framer-motion'

const Cursor = () => {
  const { cursorStyle } = useContext(AppContext);

  // console.log(cursorStyle);

  const [mousePos, setMousePos] = useState({
    x: 400,
    y: 400,
  });
  const [mousePosFixed, setMousePosFixed] = useState({
    x: 400,
    y: 400,
  });

  useEffect(() => {
    document.addEventListener("mousemove", onMouseMove);
    return () => {
      document.addEventListener("mousemove", onMouseMove);
    };
  }, []);

  const onMouseMove = (e) => {
    const { pageX: x, pageY: y } = e;
    const { clientY, clientX } = e;
    // setMousePos({ x, y });

    setMousePos({ x: clientX, y: clientY });
  };
  return (
    <motion.div
    animat
    animate={{left : mousePos.x , top :mousePos.y}}
    transition={{type:"tween" , ease: "backOut"}}
      style={{
        width: cursorStyle == "hovered" && "8rem",
        height: cursorStyle == "hovered" && "8rem",      
        backdropFilter: cursorStyle == "hovered" && "blur(10px)",
        background: cursorStyle == "hovered" && "transparent",
        transition:
          "width 0.5s, height 0.5s, backdrop-filter 0.5s, background 0.5s",
      }}
      className={`fixed  w-8 h-8  bg-white mix-blend-difference rounded-full hidden lg:flex justify-center items-center -translate-x-1/2 -translate-y-1/2  pointer-events-none z-[9999] left-0 top-0 `}
    >
      <p
        className={`text-white z-20 text-center ${
          cursorStyle == "hovered" ? "opacity-100" : "opacity-0"
        } transition-all uppercase text-[1.2rem]`}
      >
        open <br /> link!
      </p>
    </motion.div>
  );
};

export default Cursor;
