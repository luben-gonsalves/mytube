import React from "react";
import Videos from "./Videos";
import { connect } from "react-redux";
import { stateMapper } from "../store/store.js";

class SearchComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      query: ""
    };

    this.inputChange = this.inputChange.bind(this);
    this.buttonClicked = this.buttonClicked.bind(this);
  }
  inputChange(event) {
    this.setState({
      query: event.target.value
    });
  }
  buttonClicked() {
    this.props.dispatch({
      type: "FETCH_VIDEOS",
      videoType: "search",
      query: this.state.query
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CLEAR_VIDEOS"
    });
  }

  render() {
    return (
      <div>
        <h2>Search Video on myTube</h2>
        <hr />
        <div className="form-row">
          <div className="col">
            <input
              type="text"
              onChange={this.inputChange}
              className="form-control form-control-lg"
            />
          </div>
          <button onClick={this.buttonClicked} className="btn btn-info btn-lg">
            Search
          </button>
          <br />
          <Videos />
        </div>
      </div>
    );
  }
}
let Search = connect(stateMapper)(SearchComponent);

export default Search;
