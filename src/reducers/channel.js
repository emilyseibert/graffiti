// default state of channel is null
const channel = (state = null, action) => {
  switch (action.type) {
    case "START_CHANNEL":
      return new BroadcastChannel("graffiti");
    case "SEND_MESSAGE":
      state.postMessage(action.message);
      return state;
    case "CLOSE_CHANNEL":
      return state.close();
    default:
      return state;
  }
};

export default channel;
