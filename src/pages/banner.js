import React, { Component } from "react";
import { IntersectionObserver } from "../components/intersection-observer";
import { ScaleBox } from "../components/scale-box";

class Banner extends Component {
  render() {
    return (
      <IntersectionObserver>
        <ScaleBox>
          <div className="banner container mx-auto px-4 flex flex-col min-h-screen mt-6 pt-64">
            <h1 className="text-center">Hello, I'm Annie</h1>
            <p className="text-center pt-2 text-lg">
              I'm a creative full-stack web developer and designer based in
              London.
            </p>
          </div>
        </ScaleBox>
      </IntersectionObserver>
    );
  }
}

export default Banner;
