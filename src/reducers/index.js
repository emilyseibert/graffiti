import { combineReducers } from "redux";
import draw from "./draw";
import channel from "./channel";

export default combineReducers({
  draw,
  channel,
});
