import React from "react";

class Profile extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: ""
    };
  }

  componentDidMount() {
    let user = localStorage.getItem("user");
    user = JSON.parse(user);
    this.setState({
      name: user.name
    });
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <h3 className="text-danger">Hello Welcome, {this.state.name}</h3>
        </div>
      </div>
    );
  }
}

export default Profile;
