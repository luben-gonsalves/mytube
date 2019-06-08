import { createStore, combineReducers } from "redux";

import videosReducer from "./reducers/videoReducer.js";
import isVideoLoadingReducer from "./reducers/isVideoLoadingReducer.js";
import currentPlayerVideo from "./reducers/player.js";

let reducer = combineReducers({
  videos: videosReducer,
  isVideoLoading: isVideoLoadingReducer,
  currentPlayerVideo: currentPlayerVideo
});

let store = createStore(reducer);

store.subscribe(function() {
  console.log(store.getState());
});

function stateMapper(state) {
  return state;
}

export { store, stateMapper };
