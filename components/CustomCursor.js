import { AppContext } from "@context/AppContext";
import { useState, useEffect, useContext } from "react";

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
    <div
      style={{
        width: cursorStyle == "hovered" && "8rem",
        height: cursorStyle == "hovered" && "8rem",
        left: `${mousePos.x}px`,
        top: `${mousePos.y}px`,
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
    </div>
  );
};

export default Cursor;
