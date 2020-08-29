import React, { useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPosition, sendMessage } from "../actions";

/*
https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
*/
function usePrevious(value) {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
}

const Canvas = () => {
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.channel);
  const canvasEl = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [position, setPosition] = useState({ x: null, y: null });
  const previousPosition = usePrevious(position);

  // handles mouse down
  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDrawing(true);
      const nextPosition = {
        x: e.clientX - canvasEl.current.offsetLeft,
        y: e.clientY - canvasEl.current.offsetTop,
      };
      setPosition(nextPosition);
    };

    canvasEl.current.addEventListener("mousedown", handleMouseDown);
    return () =>
      canvasEl.current.removeEventListener("mousedown", handleMouseDown);
  }, [isDrawing]);

  //handle mouse move
  useEffect(() => {
    const handleMouseMove = (e) => {
      if (!isDrawing) return;
      const nextPosition = {
        x: e.clientX - canvasEl.current.offsetLeft,
        y: e.clientY - canvasEl.current.offsetTop,
      };
      setPosition(nextPosition);
    };

    canvasEl.current.addEventListener("mousemove", handleMouseMove);
    return () =>
      canvasEl.current.removeEventListener("mousemove", handleMouseMove);
  }, [isDrawing]);

  // handle mouse up
  useEffect(() => {
    const handleMouseUp = (e) => {
      setIsDrawing(false);
      setPosition({ x: null, y: null });
    };

    canvasEl.current.addEventListener("mouseup", handleMouseUp);

    return () => {
      canvasEl.current.removeEventListener("mouseup", handleMouseUp);
    };
  }, [isDrawing]);

  // handles drawing when position changes
  useEffect(() => {
    // original logic from: https://www.geeksforgeeks.org/how-to-draw-with-mouse-in-html-5-canvas/
    if (!isDrawing) return;
    const ctx = canvasEl.current.getContext("2d");

    ctx.beginPath();
    ctx.lineWidth = 5;
    ctx.lineCap = "round";
    ctx.strokeStyle = "blue";

    // if null, then line break. use same coords for both before & after of stroke.
    if (previousPosition.x) {
      ctx.moveTo(previousPosition.x, previousPosition.y);
    } else {
      ctx.moveTo(position.x, position.y);
    }
    ctx.lineTo(position.x, position.y);
    ctx.stroke();
  }, [position]);

  // handles state when position changes
  useEffect(() => {
    if (!channel) return;
    dispatch(addPosition(position));
    channel.postMessage(position);
  }, [channel, position]);

  return <canvas ref={canvasEl} style={{ border: "2px solid gray" }}></canvas>;
};

export default Canvas;
