import React from "react";
import { useSelector } from "react-redux";

const PreviewButton = ({ className }) => {
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

  return (
    <a href="#" className={className} onClick={onClick}>
      Preview
    </a>
  );
};

export default PreviewButton;
