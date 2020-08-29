// default state of drawing is []
const broadcast = (state = [], action) => {
  switch (action.type) {
    case "ADD_POSITION":
      return [...state, action.position];
    default:
      return state;
  }
};

export default broadcast;
