import React from "react";
import { Link } from "react-router-dom";

class Menu extends React.Component {
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
        </ul>
      </div>
    );
  }
}

export default Menu;
