import React from "react";
import "./ColorWheel.scss";

type ColorWheelProps = {};

const ColorWheel: React.FC<ColorWheelProps> = () => {
  return (
    <div id="colorWheel">
      {Array.from(Array(10).keys()).map((item, idx) => {
        const className = `color0${idx + 1}`;
        return <span className={className}></span>;
      })}
    </div>
  );
};

export default ColorWheel;
