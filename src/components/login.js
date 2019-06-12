import React from "react";
import { GoogleLogin } from "react-google-login";

class Login extends React.Component {
  constructor(props) {
    super(props);
    this.googleCallback = this.googleCallback.bind(this);
  }

  googleCallback(response) {
    if (!response || !response.accessToken) {
      alert("Sorry,google sign has failed");
      return;
    }
    let user = {
      token: response.accessToken,
      name: response.profileObj.name
    };
    localStorage.setItem("user", JSON.stringify(user));
    //windows.href.location="/"
    this.props.history.push("/app");
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="col-md-4 offset-md-4">
            <h2 className="text-danger">Login using google</h2>
            <GoogleLogin
              clientId="818823629438-6k6npa3npr52pnmdtmnib2e1imfn6uq5.apps.googleusercontent.com"
              buttonText="Login"
              onSuccess={this.googleCallback}
              onFailure={this.googleCallback}
            />
          </div>
        </div>
      </div>
    );
  }
}
export default Login;
