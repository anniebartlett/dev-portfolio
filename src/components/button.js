import React, { Component } from "react";

class Button extends Component {
  render() {
    return (
      <div className="button text-base text-white font-bold py-2 px-3">
        {this.props.name}
      </div>
    );
  }
}
export default Button;
