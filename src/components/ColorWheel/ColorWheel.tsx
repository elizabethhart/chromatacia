import React from "react";
import "./ColorWheel.scss";

type ColorWheelProps = {};

const ColorWheel: React.FC<ColorWheelProps> = () => {
  return (
    <div id="colorWheel">
      <span className="color01"></span>
      <span className="color02"></span>
      <span className="color03"></span>
      <span className="color04"></span>
      <span className="color05"></span>
      <span className="color06"></span>
      <span className="color07"></span>
      <span className="color08"></span>
      <span className="color09"></span>
      <span className="color10"></span>
    </div>
  );
};

export default ColorWheel;
