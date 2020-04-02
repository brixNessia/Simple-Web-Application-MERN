import Http from "utils/Http";
import * as postActions from "./store/actionCreator";

export function fetchPosts() {
  return dispatch => {
    dispatch(postActions.requestComments());
    return Http.get("/posts")
      .then(response => {
        dispatch(postActions.fetchComments(response.data));
      })
      .catch(error => {
        dispatch(postActions.requestCommentsFailed(error));
      });
  };
}

export function sendPost(params) {
  return dispatch => {
    dispatch(postActions.sendPostRequest());
    return Http.post("/posts/add_comment", { ...params })
      .then(response => {
        dispatch(postActions.sendPost(response.data));
      })
      .catch(error => {
        dispatch(postActions.sendPostFailed(error));
      });
  };
}
