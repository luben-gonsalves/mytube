import React from "react";
import { Redirect } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store.js";

class PlaylistComponent extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      type: "public",
      description: "",

      fromState: {
        isFormValid: true,
        isNameValid: true,
        isDescriptionValid: true
      }
    };
    this.onChangeHandler = this.onChangeHandler.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  onChangeHandler(event) {
    let name = event.target.name;
    this.setState({
      [name]: event.target.value
    });
  }

  validateForm() {
    let newFormState = {
      isFormValid: true,
      isNameValid: true,
      isDescriptionValid: true
    };

    if (!this.state.name) {
      newFormState.isNameValid = false;
      newFormState.isFormValid = false;
    }
    if (!this.state.description) {
      newFormState.isDescriptionValid = false;
      newFormState.isFormValid = false;
    }
    this.setState({
      fromState: newFormState
    });
    return newFormState.isFormValid;
  }

  handleSubmit(event) {
    event.preventDefault();
    if (!this.validateForm()) {
      return;
    }
    this.props.dispatch({
      type: "CREATE_PLAYLIST",
      formData: this.state
    });
  }

  componentWillUnmount() {
    this.props.dispatch({
      type: "CREATE_PLAYLISTS_CREATED"
    });
  }

  render() {
    if (this.props.newPlaylist.id) {
      return <Redirect to={`/app/playlists/${this.props.newPlaylist.id}`} />;
    }
    return (
      <div>
        <h2 className="text-danger">Create a new playlists</h2>
        <hr />
        {!this.state.fromState.isFormValid && (
          <div className="alert alert-danger">
            Please fill all the fields and try again.
          </div>
        )}
        <form onSubmit={this.handleSubmit}>
          <div className="form-group">
            <label htmlFor="">
              Playlist Name:
              <input
                type="text"
                name="name"
                onChange={this.onChangeHandler}
                className={`form-control ${!this.state.fromState.isNameValid &&
                  "is-invalid"}`}
              />
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="">
              Select Playlist Types:
              <select
                name="type"
                onChange={this.onChangeHandler}
                className="form-control"
              >
                <option value="public">Public</option>
                <option value="private">Private</option>
                <option value="unlisted">Unlisted</option>
              </select>
            </label>
          </div>
          <div className="form-group">
            <label htmlFor="">
              <textarea
                name="description"
                onChange={this.onChangeHandler}
                cols="30"
                rows="5"
                className={`form-control ${!this.state.fromState
                  .isDescriptionValid && "is-invalid"}`}
              />
            </label>
          </div>
          <button type="submit" className="btn btn-info">
            Create Playlists
          </button>
        </form>
      </div>
    );
  }
}

let Playlist = connect(stateMapper)(PlaylistComponent);
export default Playlist;
