// default state of drawing is {color: "#000"}
const strokeConfigs = (state = { color: "#000000", opacity: "1" }, action) => {
  switch (action.type) {
    case "CHANGE_COLOR":
      return { ...state, color: action.color };
    case "CHANGE_OPACITY":
      return { ...state, opacity: action.opacity };
    default:
      return state;
  }
};

export default strokeConfigs;
