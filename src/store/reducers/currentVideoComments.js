import { fetchComments } from "../api/youtube";
import { store } from "../store.js";
function currentVideoReducer(currentVideoComments = [], action) {
  if (action.type == "FETCH_COMMENTS_DATA") {
    fetchComments(store, action);
  }
  if (action.type == "COMMENTS_LOADED") {
    return action.comments;
  }
  return currentVideoComments;
}

export default currentVideoReducer;
