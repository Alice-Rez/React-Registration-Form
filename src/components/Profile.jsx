import React, { Component } from "react";
import { createContext } from "react";
import ProfileInfo from "./ProfileInfo";

export default class Profile extends Component {
  static contextType = createContext;
  render() {
    return (
      <React.Fragment>
        <div>The content is visible just for signed-in people</div>
        {this.context ? <ProfileInfo /> : null}
      </React.Fragment>
    );
  }
}
