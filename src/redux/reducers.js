import { combineReducers } from "redux";
import auth from "modules/auth/store/reducer";

const reducers = combineReducers({ auth });

export default reducers;
