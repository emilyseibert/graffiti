import React, { useMemo, useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBroadcast } from "../actions";

const Canvas = () => {
  const [isDrawing, setIsDrawing] = useState(false);

  const dispatch = useDispatch();
  const broadcasting = useSelector((state) => state.broadcast);
  const toggleBroadcasting = () => {
    dispatch(toggleBroadcast(!broadcasting));
  };

  const channel = useMemo(() => new BroadcastChannel("graffiti"), []);

  useEffect(() => {
    channel.postMessage(`broadcast is ${broadcasting ? "on" : "off"}`);
  }, [broadcasting]);

  useEffect(() => {
    const handleMouse = (e) => {
      const isStartingToDraw = e.type === "mousedown";
      setIsDrawing(isStartingToDraw);
    };

    document.addEventListener("mousedown", handleMouse);
    document.addEventListener("mouseup", handleMouse);

    return () => {
      document.removeEventListener("mousedown", handleMouse);
      document.removeEventListener("mouseup", handleMouse);
    };
  }, [isDrawing]);

  return (
    <div>
      <h1>Canvas Component</h1>
      <div>Broadcast is {broadcasting ? "on" : "off"}</div>
      <div> {isDrawing ? "drawing!" : "not drawing"}</div>

      <button onClick={toggleBroadcasting}>Toggle broadcasting</button>
      <canvas></canvas>
    </div>
  );
};

export default Canvas;
