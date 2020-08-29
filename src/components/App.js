import React, { useMemo } from "react";
import { useSelector } from "react-redux";

import Canvas from "./Canvas";

const App = () => {
  const channel = useMemo(() => new BroadcastChannel("graffiti"), []);
  const drawPath = useSelector((state) => state.draw);

  const onClick = (e) => {
    e.preventDefault();
    // open a new window for /preview
    const newWindow = window.open(`${window.location.origin}/preview.html`);
    newWindow.addEventListener("load", () => {
      // send store of draw
      channel.postMessage(drawPath);
    });
  };

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
