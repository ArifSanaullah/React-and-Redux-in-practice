import React, { Component } from "react";

export default class Button extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.clickHandler}>
          {this.props.buttonValue}
        </button>
      </div>
    );
  }
}
