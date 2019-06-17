import { store } from "../store";
import { fetchPlaylist } from "../api/youtube.js";

function playlistReducer(playlists = [], action) {
  if (action.type === "FETCH_PLAYLIST") {
    fetchPlaylist(store, action);
  }

  if (action.type === "PLAYLISTS_LOADED") {
    return action.playlists;
  }

  if (action.type === "PLAYLISTS_CREATED") {
    fetchPlaylist(store, action);
  }

  return playlists;
}

export default playlistReducer;
