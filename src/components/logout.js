import React from "react";
import { Redirect } from "react-router-dom";

class Logout extends React.Component {
  render() {
    localStorage.removeItem("user");
    return (
      <div>
        logging you out...Please wait
        <Redirect to="/login" />
      </div>
    );
  }
}
export default Logout;
