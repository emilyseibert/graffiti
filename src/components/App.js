import React, { useMemo } from "react";

import Canvas from "./Canvas";

const App = () => {
  return (
    <>
      <h1 className="text-4xl text-white bg-black">Hello</h1>
      <a href="./preview.html" target="_blank">
        Link to another page
      </a>
      <Canvas />
    </>
  );
};

export default App;
