import React, { Component } from "react";
// import Pill from "../components/pill";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faArrowAltCircleRight } from "@fortawesome/free-regular-svg-icons";

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
        <div className="links px-6 py-4">
          <p>Visit Github repo & website:</p>
          <div className="inline text-2xl">
            <a
              href={`https://github.com/${this.props.github}`}
              target="blank"
              className="no-underline hover:text-red-400 pr-3"
            >
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a
              href={`${this.props.link}`}
              target="blank"
              className="no-underline hover:text-red-400"
            >
              <FontAwesomeIcon icon={faArrowAltCircleRight} />
            </a>
          </div>
        </div>
      </div>
    );
  }
}
export default Card;
