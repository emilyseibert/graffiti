export const addPosition = (position) => ({
  type: "ADD_POSITION",
  position,
});

export const clearDrawing = () => ({
  type: "CLEAR_DRAWING",
});

export const startChannel = () => ({
  type: "START_CHANNEL",
});

export const closeChannel = () => ({
  type: "CLOSE_CHANNEL",
});

export const changeColor = (color) => ({
  type: "CHANGE_COLOR",
  color,
});
export const changeOpacity = (opacity) => ({
  type: "CHANGE_OPACITY",
  opacity,
});
