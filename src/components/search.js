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
        <div className="form-row mt-3">
          <div className="col">
            <input
              type="text"
              onChange={this.inputChange}
              className="form-control form-control-lg"
              placeholder="Search"
            />
          </div>
          <button
            onClick={this.buttonClicked}
            className="btn btn-danger btn-lg"
          >
            <span className="oi oi-magnifying-glass " />
          </button>
          <br />
        </div>
        <br />
        <Videos />
      </div>
    );
  }
}
let Search = connect(stateMapper)(SearchComponent);

export default Search;
