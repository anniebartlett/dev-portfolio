import React, { Component } from "react";
import { IntersectionObserver } from "../components/intersection-observer";
import { ScaleBox } from "../components/scale-box";
// import Card from "../components/card";

class Portfolio extends Component {
  render() {
    return (
      <IntersectionObserver>
        <ScaleBox>
          <div className="portfolio container mx-auto px-4 pt-20 min-h-screen">
            <h3>Selected Projects</h3>
            <p>Coming soon...</p>
          </div>
        </ScaleBox>
      </IntersectionObserver>
    );
  }
}
export default Portfolio;
