import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeColor } from "../actions";

const Colorpicker = () => {
  const dispatch = useDispatch();
  const color = useSelector((state) => state.strokeConfigs.color);

  return (
    <div className="inline-block flex flex-row items-center mb-2">
      <input
        className="h-8"
        type="color"
        id="stroke"
        name="head"
        onChange={(e) => dispatch(changeColor(e.target.value))}
        value={color}
      />
      <label className="ml-1" htmlFor="stroke">
        Choose your color!
      </label>
    </div>
  );
};

export default Colorpicker;