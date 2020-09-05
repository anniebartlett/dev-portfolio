import React, { Component } from "react";

class Pill extends Component {
  render() {
    return (
      <span className="inline-block rounded-full px-3 py-1 text-sm font-semibold text-white mr-2 mb-2 card-pill">
        {this.props.name}
      </span>
    );
  }
}
export default Pill;
