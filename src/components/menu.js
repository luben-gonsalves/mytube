import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import { stateMapper } from "../store/store";

class MenuComponent extends React.Component {
  componentDidMount() {
    this.props.dispatch({
      type: "FETCH_PLAYLIST"
    });
  }

  render() {
    return (
      <div>
        <span className="h2 text-danger oi oi-play-circle mt-2"> MyTube</span>
        <hr />
        <ul className="list-group">
          <li className="list-group-item bg-danger text-white">Menu</li>
          <li className="list-group-item">
            <Link to="/app">Trending</Link>
          </li>
          <li className="list-group-item">
            <Link to="/app/search">Search</Link>
          </li>
          <li className="list-group-item bg-danger text-white">Playlists</li>
          {this.props.playlists &&
            this.props.playlists.map(p => {
              return (
                <li key={p.etag} className="list-group-item">
                  <Link to={`/app/playlist/${p.id}`}>{p.snippet.title}</Link>
                </li>
              );
            })}

          <li className="list-group-item">
            <Link to="/app/playlists/create">
            <span className="oi oi-plus"></span>Create</Link>
          </li>

          <li className="list-group-item bg-danger text-white">My Account</li>
          <li className="list-group-item">
            <Link to="/app/profile">Profile</Link>
          </li>

          <li className="list-group-item">
            <Link to="/app/logout">Logout</Link>
          </li>
        </ul>
      </div>
    );
  }
}

let Menu = connect(stateMapper)(MenuComponent);
export default Menu;
