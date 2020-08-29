// default state of drawing is []
const draw = (state = [], action) => {
  switch (action.type) {
    case "ADD_POSITION":
      debugger;
      return [...state, action.position];
    default:
      return state;
  }
};

export default draw;
