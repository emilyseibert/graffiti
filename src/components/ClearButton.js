import React from "react";
import Button from "./Button";
import { useSelector } from "react-redux";

const ClearButton = () => {
  const channel = useSelector((state) => state.channel);

  const clearCanvas = () => {
    // TODO: can i do this without document.getElementById? how does responsive canvas fit into this?
    const canvas = document.getElementById("canvas");
    const canvasContext = canvas.getContext("2d");
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    channel.postMessage("clear");
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
