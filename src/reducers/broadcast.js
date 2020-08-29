// default state is broadcasting is "false" or "off". if set to true, broadcasting is on.
const broadcast = (state = false, action) => {
  switch (action.type) {
    case "TOGGLE_BROADCAST":
      return action.status;
    default:
      return state;
  }
};

export default broadcast;
