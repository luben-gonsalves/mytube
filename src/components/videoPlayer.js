import React from "react";
import { connect } from "react-redux";
import { stateMapper } from "../store/store.js";

class VideoPlayerComponent extends React.Component {
  render() {
    return (
      <div>
        <h2>Title goes here</h2>
        <hr />
        <div class="embed-responsive embed-responsive-16by9">
          <iframe
            class="embed-responsive-item"
            src={`https://www.youtube.com/embed/${
              this.props.match.params.videoId
            }?rel=0`}
            allowfullscreen
          />
        </div>
      </div>
    );
  }
}
let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;
