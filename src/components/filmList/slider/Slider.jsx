import React, { useEffect } from "react";
import "./Slider.scss";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import FilmItem from "../filmItem/FilmItem";
import { useSlider } from "./useSlider";

const Slider = ({ films }) => {
  const { slider, slideTo, slideHandler } = useSlider(films, 5);

  useEffect(() => {});
  return (
    <div className="slider">
      <button
        onClick={() => slideHandler("right")}
        className="slider_control left"
      >
        <FaArrowLeft />
      </button>

      <div className={`slider_container ${slideTo} `}>
        {slider.map((slide) =>
          slide.map((item, index) => <FilmItem key={index} film={item} />)
        )}
      </div>
      <button
        onClick={() => slideHandler("left")}
        className="slider_control right"
      >
        <FaArrowRight />
      </button>
    </div>
  );
};

export default Slider;
