import React, { useMemo, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBroadcast } from "../actions";
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Canvas = () => {
  const canvasEl = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const previousPosition = usePrevious(position);

  const dispatch = useDispatch();
  const broadcasting = useSelector((state) => state.broadcast);
  const toggleBroadcasting = () => {
    dispatch(toggleBroadcast(!broadcasting));
  };

  const channel = useMemo(() => new BroadcastChannel("graffiti"), []);

  // // handles broadcasting --> remove?
  // useEffect(() => {
  //   channel.postMessage(`broadcast is ${broadcasting ? "on" : "off"}`);
  // }, [broadcasting]);

  // handles sending drawing positions
  useEffect(() => {
    if (isDrawing) {
      channel.postMessage("drawing!");
    }
  }, [isDrawing]);

  // handles mouse events status
  useEffect(() => {
    const handleMouse = (e) => {
      const isStartingToDraw = e.type === "mousedown";
      setIsDrawing(isStartingToDraw);

      if (isStartingToDraw) {
        setPosition({
          x: e.clientX - canvasEl.current.offsetLeft,
          y: e.clientY - canvasEl.current.offsetTop,
        });
      }
    };

    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      setPosition({
        x: e.clientX - canvasEl.current.offsetLeft,
        y: e.clientY - canvasEl.current.offsetTop,
      });
    };
    canvasEl.current.addEventListener("mousedown", handleMouse);
    canvasEl.current.addEventListener("mouseup", handleMouse);
    canvasEl.current.addEventListener("mousemove", handleMouseMove);

    return () => {
      canvasEl.current.removeEventListener("mousedown", handleMouse);
      canvasEl.current.removeEventListener("mouseup", handleMouse);
      canvasEl.current.removeEventListener("mousemove", handleMouseMove);
    };
  }, [isDrawing]);

  // handles drawing when position changes
  useEffect(() => {
    if (!isDrawing) return;
    const ctx = canvasEl.current.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "blue";
    console.log(
      `from ${previousPosition.x},${previousPosition.y} to ${position.x}, ${position.y}`
    );
    ctx.moveTo(previousPosition.x, previousPosition.y);
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
  }, [position]);

  return (
    <div>
      <h1>Canvas Component</h1>
      <div>Broadcast is {broadcasting ? "on" : "off"}</div>
      <div> {isDrawing ? "drawing!" : "not drawing"}</div>

      <button onClick={toggleBroadcasting}>Toggle broadcasting</button>
      <canvas ref={canvasEl} style={{ border: "2px solid gray" }}></canvas>
    </div>
  );
};

export default Canvas;
