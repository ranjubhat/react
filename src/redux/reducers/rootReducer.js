import { combineReducers } from "redux";
import { countReducer } from "./counterReducer";
import { userReducer } from "./userReducer";
export const rootReducer = combineReducers({
  count: countReducer,
  user: userReducer,
});
