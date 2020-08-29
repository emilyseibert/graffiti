import { combineReducers } from "redux";
import draw from "./draw";
import channel from "./channel";
import strokeConfigs from "./strokeConfigs";

export default combineReducers({
  draw,
  channel,
  strokeConfigs,
});
