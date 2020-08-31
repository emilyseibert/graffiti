// default state of drawing is []
const draw = (state = [], action) => {
  switch (action.type) {
    case "ADD_POSITION":
      return [...state, action.position];
    case "CLEAR_DRAWING":
      return [];
    default:
      return state;
  }
};

export default draw;
