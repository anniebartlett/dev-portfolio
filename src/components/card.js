import React, { Component } from "react";
import Pill from "../components/pill";

class Card extends Component {
  render() {
    return (
      <div className="card max-w-sm rounded overflow-hidden shadow-lg bg-white m-3">
        <img
          src={require(`../assets/images/${this.props.img}.png`)}
          alt="portfolio"
          className="object-cover"
        />
        <div className="px-6 py-4">
          <div className="font-bold text-xl mb-2">{this.props.name}</div>
          <p className="text-gray-700 text-base">{this.props.description}</p>
        </div>
        <div className="px-6 pt-4 pb-2">
          <Pill name="#rails"></Pill>
          <Pill name="#scss"></Pill>
          <Pill name="#bootstrap"></Pill>
          <Pill name="#javascript"></Pill>
        </div>
      </div>
    );
  }
}
export default Card;
