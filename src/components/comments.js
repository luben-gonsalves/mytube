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
    return <h2>comments</h2>;
  }
}

let Comments = connect(stateMapper)(CommentsComponent);
export default Comments;
