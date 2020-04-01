import * as types from "./actionTypes";

export function requestComments() {
  return {
    type: types.REQUEST_COMMENTS
  };
}

export function fetchComments(data) {
  return {
    type: types.FETCH_COMMENTS,
    payload: data
  };
}

export function requestCommentsFailed(error) {
  return {
    type: types.REQUEST_COMMENTS_FAILED,
    payload: error
  };
}

export function sendPostRequest() {
  return {
    type: types.SEND_POST_REQUEST
  };
}

export function sendPost(data) {
  return {
    type: types.SEND_POST,
    payload: data
  };
}

export function sendPostFailed(error) {
  return {
    type: types.SEND_POST_FAILED,
    payload: error
  };
}
