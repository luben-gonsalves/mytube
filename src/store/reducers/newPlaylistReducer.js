import { createPlaylist } from "../api/youtube.js";
import { store } from "../store";

function newPlaylistReducer(newPlaylist = {}, action) {
  if (action.type == "CREATE_PLAYLIST") {
    createPlaylist(store, action);
  }

  if (action.type == "PLAYLISTS_CREATED") {
    return action.playlists;
  }

  if (action.type == "CREATE_PLAYLISTS_CREATED") {
    return {};
  }

  return newPlaylist;
}

export default newPlaylistReducer;
