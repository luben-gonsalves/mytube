import MYTUBE_CONFIG from "../../config.js";

function getUserToken() {
  let user = localStorage.getItem("user");
  if (!user) {
    return null;
  }
  user = JSON.parse(user);
  return user.token;
}

function fetchVideos(store, action) {
  if (action.videoType === "trending") {
    fetch(
      `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
        MYTUBE_CONFIG.YOUTUBE_API_KEY
      }&chart=mostPopular&maxResults=30`
    )
      .then(function(data) {
        return data.json();
      })
      .then(function(response) {
        store.dispatch({
          type: "VIDEOS_LOADED",
          videos: response.items
        });
      })
      .catch(function(err) {
        console.log("fetch error ==>", err);
      });
  } else if (action.videoType === "search") {
    let url = `https://www.googleapis.com/youtube/v3/search?part=snippet&key=${
      MYTUBE_CONFIG.YOUTUBE_API_KEY
    }&q=${action.query}&maxResults=30`;
    fetch(url)
      .then(function(data) {
        return data.json();
      })
      .then(function(response) {
        console.log(response);
        store.dispatch({
          type: "VIDEOS_LOADED",
          videos: response.items
        });
      })
      .catch(function(err) {
        console.log("fetch error ==>", err);
      });
  }
}
function fetchOneVideo(store, action) {
  let url = `https://www.googleapis.com/youtube/v3/videos?part=snippet%2CcontentDetails%2Cstatistics&id=${
    action.videoId
  }&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`;
  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(response) {
      store.dispatch({
        type: "VIDEOS_DATA_LOADED",
        videoData: response.items[0]
      });
    })
    .catch(function(err) {
      console.log("fetch error ==>", err);
    });
}

function fetchComments(store, action) {
  let url = `https://www.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=${
    action.videoId
  }&key=${MYTUBE_CONFIG.YOUTUBE_API_KEY}`;
  fetch(url)
    .then(function(data) {
      return data.json();
    })
    .then(function(response) {
      store.dispatch({
        type: "COMMENTS_LOADED",
        comments: response.items
      });
    })
    .catch(function(err) {
      console.log("fetch error ==>", err);
    });
}

function fetchPlaylist(store, action) {
  let url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet&mine=true&maxResults=20`;

  let token = getUserToken();
  if (!token) {
    return store;
  }

  fetch(url, {
    headers: {
      Authorization: `Bearer ${token}`
    }
  })
    .then(function(data) {
      return data.json();
    })
    .then(function(response) {
      store.dispatch({
        type: "PLAYLISTS_LOADED",
        playlists: response.items
      });
    })
    .catch(function(err) {
      console.log("fetch error ==>", err);
    });
}

function createPlaylist(store, action) {
  let url = `https://www.googleapis.com/youtube/v3/playlists?part=snippet`;

  let token = getUserToken();
  if (!token) {
    return store;
  }

  let formData = {
    snippet: {
      title: action.formData.name,
      descrption: action.formData.descrption
    }
  };

  fetch(url, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${token}`,
      "content-type": "application/json"
    },
    body: JSON.stringify(formData)
  })
    .then(function(data) {
      return data.json();
    })
    .then(function(response) {
      store.dispatch({
        type: "PLAYLISTS_CREATED",
        playlists: response
      });
    })
    .catch(function(err) {
      console.log("fetch error ==>", err);
    });
}

export {
  fetchVideos,
  fetchOneVideo,
  fetchComments,
  fetchPlaylist,
  createPlaylist
};
