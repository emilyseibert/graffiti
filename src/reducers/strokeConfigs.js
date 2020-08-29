// default state of drawing is {color: "#000"}
const strokeConfigs = (state = { color: "#000" }, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.color };
    default:
      return state;
  }
};

export default strokeConfigs;
