import React from "react";
import PropTypes from "prop-types";
import { useDispatch } from "react-redux";

import { changeColor } from "../actions";

const Colorpicker = ({ color }) => {
  const dispatch = useDispatch();

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

Colorpicker.propTypes = {
  color: PropTypes.string.isRequired,
};

export default Colorpicker;
