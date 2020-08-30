import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startChannel, closeChannel } from "../actions";

import Canvas from "./Canvas";
import Header from "./Header";
import StrokeConfigs from "./StrokeConfigs";
import ClearButton from "./ClearButton";
import DownloadButton from "./DownloadButton";
import PreviewButton from "./PreviewButton";

const App = () => {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(startChannel());

    return () => dispatch(closeChannel());
  }, []);

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
        <div>
          <ClearButton />
          <DownloadButton />
          <PreviewButton className="ml-12 px-4 py-2 underline text-blue-600" />
        </div>
      </div>
    </>
  );
};

export default App;
