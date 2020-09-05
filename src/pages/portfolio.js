import React, { Component } from "react";
import { IntersectionObserver } from "../components/intersection-observer";
import { ScaleBox } from "../components/scale-box";
// import MotionButton from "../components/motion-button";
import Card from "../components/card";

class Portfolio extends Component {
  render() {
    return (
      <IntersectionObserver>
        <ScaleBox>
          <div className="portfolio container mx-auto px-4 pt-20">
            <h3>Stuff I've done</h3>
            <div className="md:flex lg:flex">
              <Card
                img="lets-get-fizzical"
                name="Let's Get Fizzical!"
                description="A create-your-own cocktail machine with basic CRUD functionality, and optional image upload"
              ></Card>
              <Card
                img="plantastic"
                name="Plantastic"
                description="A marketplace app to rent out plants, with mapbox and search functionality"
              ></Card>
            </div>
          </div>
        </ScaleBox>
      </IntersectionObserver>
    );
  }
}
export default Portfolio;
