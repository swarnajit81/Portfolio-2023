import React, { useState, useEffect } from "react";

const useScrollDetection = () => {
  const [scrollStatus, setScrollStatus] = useState(false);

  let timeout = null;

  const handleScroll = (event) => {
    if (timeout) {
      //if there is already a timeout in process cancel it
      clearTimeout(timeout);
    }
    timeout = setTimeout(() => {
      timeout = null;
      setScrollStatus(false);
    }, 200);
    if (!scrollStatus) {
      setScrollStatus(true);
    }
  };

  useEffect(() => {
    document.addEventListener("scroll", (e) => handleScroll(e));
  }, []);

  return scrollStatus;
};

export default useScrollDetection;
