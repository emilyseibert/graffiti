import React from "react";
import Button from "./Button";

const DownloadButton = () => {
  const downloadCanvas = (e) => {
    const canvas = document.getElementById("canvas");
    const image = canvas
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream"); // here is the most important part because if you dont replace you will get a DOM 18 exception.
    window.location.href = image; // it will save locally

    // TODO: can i change the file name?
  };

  return (
    <Button
      text="Download"
      className="mt-2 ml-2 px-3 py-2 bg-blue-600 text-white rounded-sm"
      onClick={downloadCanvas}
    />
  );
};
export default DownloadButton;
