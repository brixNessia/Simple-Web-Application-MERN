import Http from "utils/Http";
import {
  requestSignIn,
  signIn,
  failSignIn,
  signOut,
  setUser
} from "./store/actionCreator";

export function signup(params) {
  return dispatch => {
    return Http.post("/auth/sign-up", { ...params })
      .then(response => {
        console.log(response);
      })
      .catch(error => console.log(error));
  };
}

export function login(params) {
  return dispatch => {
    dispatch(requestSignIn());
    return Http.post("/auth/login", { ...params })
      .then(response => {
        console.log(response);

        dispatch(signIn(response.data.token));
      })
      .catch(error => {
        dispatch(failSignIn(error.response.data));
      });
  };
}

export function getUser() {
  return dispatch => {
    return Http.get("/users/profile/me").then(response => {
      dispatch(setUser(response.data.data));
    });
  };
}

export function signOutUser() {
  return dispatch => {
    return Http.get("api/signout")
      .then(() => {
        dispatch(signOut());
      })
      .catch(error => {
        console.log(error);
      });
  };
}
