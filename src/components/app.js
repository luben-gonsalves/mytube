import React from "react";
import { Provider } from "react-redux";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import { store } from "../store/store.js";
import Videos from "./Videos";
import Menu from "./menu.js";
import Trending from "./trending";
import Search from "./search";

class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <Router>
          <div className="container">
            <div className="row">
              <div className="col-md-3">
                <Menu />
              </div>
              <div className="col-md-9">
                <Route path="/" exact={true} component={Trending} />
                <Route path="/search" component={Search} />
              </div>
            </div>
          </div>
        </Router>
      </Provider>
    );
  }
}

export default App;
