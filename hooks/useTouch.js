import React, { useEffect, useState } from "react";

// enums 1--> left, 2---> right, 3--->up, 4---> down
const useSwipe = (refElem, actionUp, actionDown) => {
  const [swipeType, setSwipeType] = useState();

  useEffect(() => {
    refElem?.current?.addEventListener("touchstart", handleTouchStart, false);
    refElem?.current?.addEventListener("touchmove", handleTouchMove, false);

    var xDown = null;
    var yDown = null;

    function getTouches(evt) {
      evt.preventDefault();
      return (
        evt.touches || // browser API
        evt.originalEvent.touches
      ); // jQuery
    }

    function handleTouchStart(evt) {
      evt.preventDefault();
      const firstTouch = getTouches(evt)[0];
      xDown = firstTouch.clientX;
      yDown = firstTouch.clientY;
    }

    function handleTouchMove(evt) {
      evt.preventDefault();
      if (!xDown || !yDown) {
        return;
      }

      var xUp = evt.touches[0].clientX;
      var yUp = evt.touches[0].clientY;

      var xDiff = xDown - xUp;
      var yDiff = yDown - yUp;

      if (Math.abs(xDiff) > Math.abs(yDiff)) {
        /*most significant*/
        if (xDiff > 0) {
          setSwipeType(1);
        } else {
          setSwipeType(2);
        }
      } else {
        if (yDiff > 0) {
          actionDown();

          setSwipeType(4);
        } else {
          actionUp();

          setSwipeType(3);
        }
      }
      /* reset values */
      xDown = null;
      yDown = null;
    }

    return () => {
      refElem?.current?.removeEventListener(
        "touchstart",
        handleTouchStart,
        false
      );
      refElem?.current?.removeEventListener(
        "touchmove",
        handleTouchMove,
        false
      );
    };
  }, [refElem, actionDown, actionUp]);

  return swipeType;
};

export default useSwipe;
