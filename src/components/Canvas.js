import React, { useMemo, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toggleBroadcast } from "../actions";

const Canvas = () => {
  const dispatch = useDispatch();
  const broadcasting = useSelector((state) => state.broadcast);
  const toggleBroadcasting = () => {
    dispatch(toggleBroadcast(!broadcasting));
  };

  const channel = useMemo(() => new BroadcastChannel("graffiti"), []);

  useEffect(() => {
    channel.postMessage(`broadcast is ${broadcasting ? "on" : "off"}`);
  }, [broadcasting]);

  return (
    <div>
      <h1>Canvas Component</h1>
      <div>Broadcast is {broadcasting ? "on" : "off"}</div>

      <button onClick={toggleBroadcasting}>Toggle broadcasting</button>
    </div>
  );
};

export default Canvas;
