import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startChannel, closeChannel } from "../actions";

import Canvas from "./Canvas";
import Header from "./Header";
import StrokeConfigs from "./StrokeConfigs";

const App = () => {
  const dispatch = useDispatch();
  const channel = useSelector((state) => state.channel);

  useEffect(() => {
    dispatch(startChannel());

    return () => dispatch(closeChannel());
  }, []);

  const downloadImage = (e) => {
    const canvas = document.getElementById("canvas");
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href = image; // it will save locally

    // TODO: can i change the file name?
  };

  const clearCanvas = () => {
    // TODO: can i do this without document.getElementById? how does responsive canvas fit into this?
    const canvas = document.getElementById("canvas");
    const canvasContext = canvas.getContext("2d");
    canvasContext.clearRect(0, 0, canvas.width, canvas.height);
    channel.postMessage("clear");
  };
  return (
    <>
      <div className="m-3">
        <Header />
        <div className="py-3">
          Draw whatever you'd like inside of the gray box! Press Preview to see
          it on its own screen.
        </div>
        <StrokeConfigs />
        <Canvas />
        <button
          className="mt-2 px-3 py-2 bg-red-600 text-white rounded-sm"
          onClick={clearCanvas}
        >
          Clear
        </button>
        <button
          className="mt-2 ml-2 px-3 py-2 bg-blue-600 text-white rounded-sm"
          onClick={downloadImage}
        >
          Download
        </button>
      </div>
    </>
  );
};

export default App;
