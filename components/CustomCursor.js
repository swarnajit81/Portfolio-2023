import { useState, useEffect } from "react";


const Cursor = () => {
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
        left:  `${mousePos.x}px`,
        top:  `${mousePos.y}px`,
      }}
      className={`fixed  w-8 h-8 bg-white mix-blend-difference rounded-full hidden lg:block -translate-x-1/2 -translate-y-1/2 transition-[width , height] will-change-all pointer-events-none z-[9999] left-0 top-0 `}
    ></div>
  );
};

export default Cursor;