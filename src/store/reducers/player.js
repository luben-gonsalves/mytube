import { fetchOneVideo } from "../api/youtube.js";
import { store } from "../store";

function currentPlayerVideo(currentVideoData = {}, action) {
  if (action.type === "FETCH_VIDEO_DATA") {
    fetchOneVideo(store, action);
  }

  if (action.type === "VIDEOS_DATA_LOADED") {
    return action.videoData;
  }
  return currentVideoData;
}

export default currentPlayerVideo;
