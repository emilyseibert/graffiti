import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { startChannel, closeChannel } from "../actions";

import Canvas from "./Canvas";
import Header from "./Header";

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
        <Canvas />
      </div>
    </>
  );
};

export default App;
