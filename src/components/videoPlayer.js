import React from "react";
import { connect } from "react-redux";
import { stateMapper } from "../store/store.js";
import Comments from "./comments.js";

class VideoPlayerComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      showMore: false
    };
    this.handleButton = this.handleButton.bind(this);
  }
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_VIDEO_DATA",
      videoId: this.props.match.params.videoId
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_VIDEO_DATA"
    });
  }

  handleButton() {
    this.state.showMore
      ? this.setState({
          showMore: false
        })
      : this.setState({
          showMore: true
        });
  }

  rednerTitle() {
    if (!this.props.currentPlayerVideo.snippet) {
      return "Loading...";
    } else {
      return this.props.currentPlayerVideo.snippet.title;
    }
  }

  renderDescription() {
    if (this.state.showMore) {
      return (
        <p>
          {this.props.currentPlayerVideo.snippet.description}
          <button onClick={this.handleButton} className="btn btn-info btn-sm">
            Show less
          </button>
        </p>
      );
    } else {
      return (
        <p>
          {this.props.currentPlayerVideo.snippet &&
            this.props.currentPlayerVideo.snippet.showDescription}
          <button onClick={this.handleButton} className="btn btn-info btn-sm">
            Show more
          </button>
        </p>
      );
    }
  }

  render() {
    return (
      <div>
        <br />
        <div className="embed-responsive embed-responsive-16by9">
          <iframe
            className="embed-responsive-item"
            src={`https://www.youtube.com/embed/${
              this.props.match.params.videoId
            }?rel=0`}
            allowFullScreen
            title={this.props.match.params.videoId}
          />
        </div>
        <br />
        <div className="row">
          <div className="col-md-12">
            <h4 className="text-danger">{this.rednerTitle()}</h4>
            <span className="h5">
              {this.props.currentPlayerVideo.statistics &&
                this.props.currentPlayerVideo.statistics.viewCount}{" "}
              views
            </span>
            <span className="oi oi-thumb-up offset-md-7">
              {this.props.currentPlayerVideo.statistics &&
                this.props.currentPlayerVideo.statistics.likeCount}
            </span>
            &emsp;
            <span className="oi oi-thumb-down">
              {this.props.currentPlayerVideo.statistics &&
                this.props.currentPlayerVideo.statistics.dislikeCount}
            </span>
            <hr />
          </div>
        </div>
        <div className="row">
          <div className="col-md-8">{this.renderDescription()}</div>
        </div>
        <hr />
        <div className="row">
          <div className="col-md-8">
            <h4>
              {this.props.currentPlayerVideo.statistics &&
                this.props.currentPlayerVideo.statistics.commentCount}{" "}
              Comments
            </h4>
            <Comments videoId={this.props.match.params.videoId} />
          </div>
        </div>
      </div>
    );
  }
}
let VideoPlayer = connect(stateMapper)(VideoPlayerComponent);

export default VideoPlayer;
