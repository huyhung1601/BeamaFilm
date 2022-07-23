import { useCallback } from "react";
import { useEffect, useState } from "react";

export const useSlider = (items, num) => {
  const [slider, setSlider] = useState([]);
  const [slideTo, setSildeto] = useState("");

  /**How useSlider work
   * slider will divide list of items into groups of 'num' items
   * slideHadndler will triger class animation "left or right" when get direction
   * after that nanimation class will be removed and slider will switch posion of slide depeding on animation direction
   *
   * -----------------------------------left----animation-----------------------------------------
   * ------[-----screen----]------          =>   ------[-----screen----]------
   * [[--1--],[--2--],[--3--],[--4--]]           [[--4--],[--1--],[--2--],[--3--]]
   *
   * * -----------------------------------right----animation-----------------------------------------
   * ------[-----screen----]------          =>    ------[-----screen----]------
   * [[--1--],[--2--],[--3--],[--4--]]            [[--2--],[--3--],[--4--],[--1--]]
   *
   *
   */

  const slideHandler = useCallback(
    (direction) => {
      setSildeto(direction);
      if (direction === "left") {
        setTimeout(() => {
          setSildeto("");
          setSlider([slider.pop(), ...slider]);
        }, 1000);
      }
      if (direction === "right") {
        setTimeout(() => {
          const removedItem = slider.shift();
          setSildeto("");
          setSlider([...slider, removedItem]);
        }, 1000);
      }
    },
    [slider]
  );

  useEffect(() => {
    for (let i = 0; i < items.length; i += num) {
      const chunk = items.slice(i, i + num);
      setSlider((p) => [...p, chunk]);
    }
  }, [items, num]);

  return { slider, slideTo, slideHandler };
};
