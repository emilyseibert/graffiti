export const addPosition = (position) => ({
  type: "ADD_POSITION",
  position,
});

export const startChannel = () => ({
  type: "START_CHANNEL",
});

export const sendMessage = (message) => ({
  type: "SEND_MESSAGE",
  message,
});

export const closeChannel = () => ({
  type: "CLOSE_CHANNEL",
});
