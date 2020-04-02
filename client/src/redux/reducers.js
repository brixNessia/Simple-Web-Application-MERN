import { combineReducers } from "redux";
import authentication from "modules/auth/store/reducer";
import posts from "modules/home/store/reducer";

const reducers = combineReducers({
  authentication,
  posts
});

export default reducers;
