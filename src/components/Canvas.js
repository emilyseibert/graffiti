import React, { useMemo, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBroadcast } from "../actions";

const Canvas = () => {
  const canvasEl = useRef(null);
  const [isDrawing, setIsDrawing] = useState(false);

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

  // handles mouse events for drawing
  useEffect(() => {
    const handleMouse = (e) => {
      const isStartingToDraw = e.type === "mousedown";
      setIsDrawing(isStartingToDraw);
    };
    canvasEl.current.addEventListener("mousedown", handleMouse);
    canvasEl.current.addEventListener("mouseup", handleMouse);

    return () => {
      canvasEl.current.removeEventListener("mousedown", handleMouse);
      canvasEl.current.removeEventListener("mouseup", handleMouse);
    };
  }, [isDrawing]);

  const sketch = (e) => {
    if (!isDrawing) return;
    // canvasEl.beginPath();

    // canvasEl.lineWidth = 5;

    // // Sets the end of the lines drawn
    // // to a round shape.
    // canvasEl.lineCap = 'round';

    // canvasEl.strokeStyle = 'green';

    // // The cursor to start drawing
    // // moves to this coordinate
    // canvasEl.moveTo(coord.x, coord.y);

    // // The position of the cursor
    // // gets updated as we move the
    // // mouse around.
    // getPosition(event);

    // // A line is traced from start
    // // coordinate to this coordinate
    // canvasEl.lineTo(coord.x , coord.y);

    // // Draws the line.
    // canvasEl.stroke();
  };

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
