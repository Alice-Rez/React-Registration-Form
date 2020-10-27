import React, { Component } from "react";

export default class Logout extends Component {
  render() {
    return <div>{this.props.setIsLogged(false)}</div>;
  }
}
