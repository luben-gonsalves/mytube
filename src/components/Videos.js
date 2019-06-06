import React from "react";
import { connect } from "react-redux";

import { stateMapper } from "../store/store.js";

class VideosComponent extends React.Component {
  renderVideos() {
    return this.props.videos.map(v => {
      return (
        <div key={v.etag} className="col-md-4">
          <a target="blank" href={`https://youtube.com/watch?v=${v.id}`}>
            <img
              className="img-fluid"
              src={v.snippet.thumbnails.high.url}
              alt={v.snippet.title}
            />
          </a>
          <small>
            {v.snippet.title} by <em>{v.snippet.channelTitle}</em>
          </small>
        </div>
      );
    });
  }
  render() {
    return <div className="row">{this.renderVideos()}</div>;
  }
}

let Videos = connect(stateMapper)(VideosComponent);
export default Videos;
