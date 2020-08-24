import React, { Component } from "react";
import { IntersectionObserver } from "../components/intersection-observer";
import { ScaleBox } from "../components/scale-box";
import Skills from "../pages/skills";

class About extends Component {
  render() {
    return (
      <IntersectionObserver>
        <ScaleBox>
          <div className="about container mx-auto px-4 block min-h-screen pt-20">
            <h3 className="mb-3">Hey I'm Annie, nice to meet you!</h3>
            <div className="md:flex">
              <div className="pr-6">
                <p className="leading-relaxed mb-6">
                  After 7 years working in Fashion Merchandising at Asos, I
                  decided to retrain and embark a new journey as a developer.
                </p>
                <p className="leading-relaxed mb-6">
                  Life took another turn and in Feb 2020 I gave birth to my
                  little son Henry.
                </p>
                <p className="leading-relaxed mb-6">
                  I've always loved tech and design, so in April 2020 I made one
                  of the best decisions to take part in Le Wagon part-time
                  bootcamp whilst on maternity leave.
                </p>
                <p className="leading-relaxed mb-6">
                  I learned the fundamentals of code through Ruby, as well as
                  HTML5, CSS3 and JS, React and Node (Bootstrap and milk bottles
                  became the norm!)
                </p>
                <p className="leading-relaxed mb-6">
                  I love building beautiful products, combining technology with
                  creative ideas.
                </p>
              </div>
              <div className="md:flex-shrink-0">
                <img
                  src={require("../assets/images/profile-img.jpeg")}
                  alt="profile"
                  className="profile-img object-cover mt-1"
                />
              </div>
            </div>
            <Skills></Skills>
          </div>
        </ScaleBox>
      </IntersectionObserver>
    );
  }
}
export default About;
