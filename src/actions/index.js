export const addPosition = (position) => ({
  type: "ADD_POSITION",
  position,
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
