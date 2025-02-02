import React, { useEffect } from "react";
import { gsap } from "gsap";

const menuItems = [
  {
    text: "Projects",
  },
  {
    text: "About",
  },
  {
    text: "Contact",
  },
];

const Menu = ({ isMenuOpend, setIsMenuOpend }) => {
  const menuContainerRef = React.useRef(null);
  const menuContainerOverlay = React.useRef(null);
  const handleOpenAnimation = () => {
    gsap.to(menuContainerOverlay.current, {
      y: "100%",
      duration: 1.5,
      ease: "expo.inOut",
    });
    gsap.to(menuContainerRef.current, {
      y: 0,
      delay: 0.5,
      duration: 1,
      ease: "expo.inOut",
    });
  };

  const handleCloseAnimation = () => {
    gsap.to(menuContainerOverlay.current, {
      y: "0%",
      duration: 1.5,
      ease: "expo.inOut",
    });
    gsap.to(menuContainerRef.current, {
      y: "-100%",
      duration: 1.5,
      delay: 0.1,
      ease: "expo.inOut",
    });
  };

  useEffect(() => {
    if (isMenuOpend) {
      handleOpenAnimation();
    } else {
      handleCloseAnimation();
    }
  }, [isMenuOpend]);

  return (
    <div
      ref={menuContainerRef}
      className="lg:hidden fixed inset-0 bg-black -translate-y-full flex flex-col  justify-between"
    >
      <p
        onClick={() => setIsMenuOpend(false)}
        className="absolute top-0 right-0 p-[2rem]"
      >
        CLOSE
      </p>
      <div className="w-full h-full flex flex-col items-center justify-center">
        {menuItems.map((menuItem) => (
          <a
            className="text-[4rem] font-[300] tracking-wider"
            key={menuItem.text}
          >
            {menuItem.text}
          </a>
        ))}
      </div>
      <div
        ref={menuContainerOverlay}
        className="absolute inset-0 bg-royal-orange "
      ></div>
    </div>
  );
};

export default Menu;
