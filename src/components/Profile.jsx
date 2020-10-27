import React, { Component } from "react";
import { loggContext } from "./context";
import ProfileInfo from "./ProfileInfo";

export default class Profile extends Component {
  static contextType = loggContext;
  render() {
    return (
      <React.Fragment>
        {console.log(this.context)}
        <div>The content is visible just for signed-in people</div>
        {this.context.visibility ? <ProfileInfo /> : null}
      </React.Fragment>
    );
  }
}
