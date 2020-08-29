import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { changeOpacity } from "../actions";

const StrokeOpacity = () => {
  const dispatch = useDispatch();
  const opacity = useSelector((state) => state.strokeConfigs.opacity);

  return (
    <div>
      <input
        id="contrast"
        type="range"
        value="contrast"
        max="1"
        min="0"
        value={opacity}
        step="0.01"
        onChange={(e) => dispatch(changeOpacity(e.target.value))}
      />
      <label className="ml-1" htmlFor="contrast">
        Choose your stroke opacity!
      </label>
    </div>
  );
};

export default StrokeOpacity;
