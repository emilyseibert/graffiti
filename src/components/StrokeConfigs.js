import React from "react";
import { useSelector } from "react-redux";
import Colorpicker from "./Colorpicker";
import StrokeOpacity from "./StrokeOpacity";

const StrokeConfigs = () => {
  const configs = useSelector((state) => state.strokeConfigs);

  return (
    <>
      <Colorpicker color={configs.color} />
      <StrokeOpacity opacity={configs.opacity} />
    </>
  );
};

export default StrokeConfigs;
