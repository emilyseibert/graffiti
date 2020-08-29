import React, { useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { startChannel, closeChannel } from "../actions";

import Canvas from "./Canvas";

const App = () => {
  const dispatch = useDispatch();
  // drawPath is [{x: ..., y:...}] where if coord x/y is null ==> line break
  const drawPath = useSelector((state) => state.draw);
  const channel = useSelector((state) => state.channel);

  const onClick = (e) => {
    e.preventDefault();
    // open a new window for /preview
    const newWindow = window.open(`${window.location.origin}/preview.html`);
    newWindow.addEventListener("load", () => {
      // send store of draw
      channel.postMessage(drawPath);
    });
  };

  useEffect(() => {
    dispatch(startChannel());

    return () => dispatch(closeChannel());
  }, []);

  return (
    <>
      <nav className="flex items-center justify-between flex-wrap bg-teal-500 p-6">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            className="fill-current h-8 w-8 mr-2"
            width="54"
            height="54"
            viewBox="0 0 54 54"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path d="M13.5 22.1c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05zM0 38.3c1.8-7.2 6.3-10.8 13.5-10.8 10.8 0 12.15 8.1 17.55 9.45 3.6.9 6.75-.45 9.45-4.05-1.8 7.2-6.3 10.8-13.5 10.8-10.8 0-12.15-8.1-17.55-9.45-3.6-.9-6.75.45-9.45 4.05z" />
          </svg>
          <span className="font-semibold text-xl tracking-tight">
            Graffiti App
          </span>
        </div>
        <div>
          <div>
            <a
              href="#"
              className="inline-block text-sm px-4 py-2 leading-none border rounded text-white border-white hover:border-transparent hover:text-teal-500 hover:bg-white mt-4 lg:mt-0"
              onClick={onClick}
            >
              Preview
            </a>
          </div>
        </div>
      </nav>
      <div className="m-3">
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
