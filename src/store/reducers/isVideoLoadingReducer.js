function isVideoLoadingReducer(isVideoLoading = false, action) {
  if (action.type === "FETCH_VIDEOS") {
    return true;
  }

  if (action.type === "VIDEOS_LOADED") {
    return false;
  }
  return isVideoLoading;
}

export default isVideoLoadingReducer;
