import React from "react";
import Button from "./Button";
import { useSelector, useDispatch } from "react-redux";
import { clearDrawing } from "../actions";

const ClearButton = () => {
  const channel = useSelector((state) => state.channel);
  const dispatch = useDispatch();

  const clearCanvas = () => {
    // TODO: can i do this without document.getElementById? how does responsive canvas fit into this?
    const canvas = document.getElementById("canvas");
    const canvasContext = canvas.getContext("2d");
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    channel.postMessage("clear");
    dispatch(clearDrawing());
  };

  return (
    <Button
      text="Clear"
      className="mt-2 px-3 py-2 bg-red-600 text-white rounded-sm"
      onClick={clearCanvas}
    />
  );
};
export default ClearButton;
