import React, { useMemo, useEffect, useState, useRef } from "react";
import { useSelector, useDispatch } from "react-redux";
import { addPosition } from "../actions";
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
  // drawPath is [{x: ..., y:...}] where if coord x/y is null ==> line break
  const drawPath = useSelector((state) => state.draw);
  const dispatchAddPosition = () => {
    // when firing update to store, pass in local state position from mouseevent
    dispatch(addPosition(position));
  };

  const canvasEl = useRef(null);

  const [isDrawing, setIsDrawing] = useState(false);
  const [position, setPosition] = useState({ x: null, y: null });
  const previousPosition = usePrevious(position);

  const channel = useMemo(() => new BroadcastChannel("graffiti"), []);

  // handles mouse down
  useEffect(() => {
    const handleMouseDown = (e) => {
      setIsDrawing(true);
      const nextPosition = {
        x: e.clientX - canvasEl.current.offsetLeft,
        y: e.clientY - canvasEl.current.offsetTop,
      };
      channel.postMessage(nextPosition);
      setPosition(nextPosition);
      dispatchAddPosition(nextPosition);
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
      channel.postMessage(nextPosition);

      setPosition(nextPosition);
      dispatchAddPosition(nextPosition);
    };

    canvasEl.current.addEventListener("mousemove", handleMouseMove);
    return () =>
      canvasEl.current.removeEventListener("mousemove", handleMouseMove);
  });

  // handle mouse up
  useEffect(() => {
    const handleMouseUp = (e) => {
      setIsDrawing(false);
      setPosition({ x: null, y: null });
      channel.postMessage({ x: null, y: null });
      dispatchAddPosition({ x: null, y: null });
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

  console.log("line path positions", drawPath);
  return <canvas ref={canvasEl} style={{ border: "2px solid gray" }}></canvas>;
};

export default Canvas;
