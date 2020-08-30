import React, { useEffect, useRef } from "react";

/*
https://blog.logrocket.com/how-to-get-previous-props-state-with-react-hooks/
*/
export const usePrevious = (value) => {
  const ref = useRef();
  useEffect(() => {
    ref.current = value;
  });
  return ref.current;
};
