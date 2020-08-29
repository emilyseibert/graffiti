import React from "react";
import { useSelector } from "react-redux";
import Colorpicker from "./Colorpicker";
import StrokeOpacity from "./StrokeOpacity";

const StrokeConfigs = () => {
  const configs = useSelector((state) => state.strokeConfigs);

  return (
    <div className="mb-3">
      <Colorpicker color={configs.color} />
      <StrokeOpacity opacity={configs.opacity} />
    </div>
  );
};

export default StrokeConfigs;
