import { fetchOneVideo } from "../api/youtube.js";
import { store } from "../store";

function currentPlayerVideo(currentVideoData = {}, action) {
  if (action.type === "FETCH_VIDEO_DATA") {
    fetchOneVideo(store, action);
  }
  if (action.type === "CLEAR_VIDEO_DATA") {
    return {};
  }

  if (action.type === "VIDEOS_DATA_LOADED") {
    let newState = action.videoData;
    newState.snippet.showDescription = action.videoData.snippet.description.slice(
      0,
      400
    );
    return newState;
  }
  return currentVideoData;
}

export default currentPlayerVideo;
