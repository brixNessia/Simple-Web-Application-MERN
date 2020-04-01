import * as types from "./actionTypes";

export function requestSignIn() {
  return {
    type: types.AUTH_SIGNIN_PENDING
  };
}

export function signIn(authToken) {
  return {
    type: types.AUTH_SIGNIN_SUCCEEDED,
    payload: authToken
  };
}

export function signOut() {
  return {
    type: types.AUTH_SIGNOUT
  };
}

export function failSignIn(error) {
  return {
    type: types.AUTH_SIGNIN_FAILED,
    payload: error
  };
}

export function authCheck() {
  return {
    type: types.AUTH_CHECK
  };
}

export function setUser(user) {
  return {
    type: types.AUTH_SET_USER,
    payload: user
  };
}

export function signUpError(error) {
  return {
    type: types.AUTH_SIGNUP_FAILED,
    payload: error
  };
}
