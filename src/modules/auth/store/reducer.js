import Http from "utils/Http";
import * as types from "./actionTypes";

const initialState = {
  isAuthenticated: false,
  signInFailed: false,
  isPending: false,
  error: {},
  user: null
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.AUTH_SIGNIN_SUCCEEDED:
      setToken(payload);
      return {
        ...state,
        isAuthenticated: true,
        isPending: false,
        signInFailed: false
      };
    case types.AUTH_SIGNIN_PENDING:
      return { ...state, isPending: true, error: {}, signInFailed: false };
    case types.AUTH_SIGNIN_FAILED:
      return {
        ...state,
        isPending: false,
        error: payload,
        signInFailed: true
      };
    case types.AUTH_CHECK:
      const accessToken = localStorage.getItem("accessToken");
      const currentState = {
        ...state,
        isAuthenticated: !!accessToken
      };

      if (currentState.isAuthenticated) {
        Http.defaults.headers.common["Authorization"] = `Bearer ${accessToken}`;
      }

      return currentState;
    case types.AUTH_SIGNOUT:
      // clear tokens
      localStorage.removeItem("accessToken");

      return {
        ...state,
        isAuthenticated: false,
        user: null
      };
    case types.AUTH_SET_USER:
      return {
        ...state,
        user: payload
      };
    case types.AUTH_SIGNUP_FAILED:
      return {
        ...state,
        error: payload
      };
    default:
      return state;
  }
}

/**
 * Stores the access_token in local storage
 * and updates the HTTP header
 *
 * @param paload
 */
function setToken(access_token) {
  localStorage.setItem("accessToken", access_token);

  Http.defaults.headers.common["Authorization"] = `Bearer ${access_token}`;
}

export default reducer;
