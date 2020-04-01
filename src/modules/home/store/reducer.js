import * as types from "./actionTypes";

const initialState = {
  fetching: false,
  failed: false,
  sending: false,
  posts: []
};

function reducer(state = initialState, action) {
  const { type, payload } = action;

  switch (type) {
    case types.REQUEST_COMMENTS:
      return {
        ...state,
        fetching: true,
        failed: false
      };
    case types.FETCH_COMMENTS:
      return {
        ...state,
        fetching: false,
        failed: false,
        posts: payload
      };
    case types.REQUEST_COMMENTS_FAILED:
      return {
        ...state,
        fetching: false,
        failed: true,
        error: payload
      };
    case types.SEND_POST_REQUEST:
      return {
        ...state,
        sending: true,
        failed: false
      };
    case types.SEND_POST:
      console.log("payload", payload);

      return {
        ...state,
        sending: false,
        failed: false,
        posts: [...state.posts, payload]
      };
    case types.SEND_POST_FAILED:
      return {
        ...state,
        sending: false,
        failed: true,
        error: payload
      };
    default:
      return state;
  }
}
export default reducer;
