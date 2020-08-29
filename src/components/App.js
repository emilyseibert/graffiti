import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startChannel, closeChannel, sendMessage } from "../actions";

import Canvas from "./Canvas";

const App = () => {
  const dispatch = useDispatch();
  // drawPath is [{x: ..., y:...}] where if coord x/y is null ==> line break
  const drawPath = useSelector((state) => state.draw);

  const onClick = (e) => {
    e.preventDefault();
    // open a new window for /preview
    const newWindow = window.open(`${window.location.origin}/preview.html`);
    newWindow.addEventListener("load", () => {
      // send store of draw
      dispatch(sendMessage(drawPath));
    });
  };

  useEffect(() => {
    dispatch(startChannel());

    return () => dispatch(closeChannel());
  }, []);

  return (
    <>
      <h1 className="text-4xl text-white bg-black">Hello</h1>
      <a href="./preview.html" onClick={onClick}>
        See preview
      </a>
      <Canvas />
    </>
  );
};

export default App;
