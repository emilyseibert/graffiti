import React, { useState } from "react";

const Colorpicker = () => {
  const [color, setColor] = useState("#000");

  const changeColor = (e) => {
    setColor(e.target.value);
  };
  return (
    <div className="inline-block flex flex-row items-center mb-2">
      <input
        className="h-8"
        type="color"
        id="stroke"
        name="head"
        onChange={changeColor}
        value={color}
      />
      <label className="ml-1" for="stroke">
        Choose your color!
      </label>
    </div>
  );
};

export default Colorpicker;
