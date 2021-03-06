import React, { Component } from "react";

class Banner extends Component {
  render() {
    return (
      <div className="home relative flex items-center">
        <img
          src={require("../assets/images/mixed_blobs.gif")}
          alt="banner"
          className="banner-img"
        />
        <div className="banner-text flex flex-col absolute">
          <h1 className="text-center">Hello, I'm Annie.</h1>
          <p className="text-center text-lg">
            I'm a creative full-stack web developer based in London.
          </p>
        </div>
      </div>
    );
  }
}

export default Banner;
