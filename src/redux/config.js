import { createStore, applyMiddleware } from "redux";
import thunkMiddlware from "redux-thunk";
import { composeWithDevTools } from "redux-devtools-extension";
import reducers from "./reducers";

const middlewares = [thunkMiddlware];
const middlewareEnhancer = applyMiddleware(...middlewares);
const enhancers = [middlewareEnhancer];
const composedEnhancers = composeWithDevTools(...enhancers);
const initialState = {
  authentication: {},
  posts: []
};
const store = createStore(reducers, initialState, composedEnhancers);

export default store;
