import React, { useMemo, useEffect } from "react";

import Canvas from "./Canvas";

const App = () => {
  const channel = useMemo(() => new BroadcastChannel("graffiti"), []);

  const sendTestMsg = () => {
    channel.postMessage("testing!");
  };

  return (
    <>
      <h1 className="text-4xl text-white bg-black">Hello</h1>
      <a href="./preview.html" target="_blank">
        Link to another page
      </a>
      <button onClick={sendTestMsg}>Testing channel broadcasting!</button>
      <Canvas />
    </>
  );
};

export default App;
