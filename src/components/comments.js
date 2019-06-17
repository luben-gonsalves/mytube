import React from "react";
import { connect } from "react-redux";
import { stateMapper } from "../store/store.js";

class CommentsComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_COMMENTS_DATA",
      videoId: this.props.videoId
    });
  }
  render() {
    return this.props.currentVideoComments.map(x => {
      return (
        <div className="media mt-2" key={x.etag}>
          <img
            src={x.snippet.topLevelComment.snippet.authorProfileImageUrl}
            className="mr-3"
            alt=""
          />
          <div className="media-body">
            <h5 className="mt-0">
              {x.snippet.topLevelComment.snippet.authorDisplayName}
            </h5>
            {x.snippet.topLevelComment.snippet.textOriginal}
          </div>
        </div>
      );
    });
  }
}

let Comments = connect(stateMapper)(CommentsComponent);
export default Comments;
