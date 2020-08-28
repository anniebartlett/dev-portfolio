import React, { Component } from "react";
import Skills from "../pages/skills";

class About extends Component {
  render() {
    return (
      <div className="about container px-4 mx-auto">
        <h3>About Me.</h3>
        <div className="lg:flex">
          <div className="about-me mr-12">
            <p className="leading-relaxed mb-6">
              After 7 years working in Fashion Merchandising at Asos, I decided
              to retrain and embark a new journey as a web developer.
            </p>
            <p className="leading-relaxed mb-6">
              Life took another turn and in Feb 2020 I gave birth to my little
              son Henry.
            </p>
            <p className="leading-relaxed mb-6">
              I've always loved tech and design, so in April 2020 I made one of
              the best decisions to take part in the Le Wagon part-time bootcamp
              whilst on maternity leave.
            </p>
            <p className="leading-relaxed mb-6">
              I learned the fundamentals of code through Ruby, as well as HTML5,
              CSS3 and JS, React and Node (Bootstrap and milk bottles became the
              norm!)
            </p>
            <p className="leading-relaxed mb-6">
              I love building beautiful digital products, combining technology
              with creative ideas.
            </p>
          </div>
          <div className="lg:flex-shrink-0">
            <img
              src={require("../assets/images/profile-img.jpeg")}
              alt="profile"
              className="profile-img object-cover mt-1"
            />
          </div>
        </div>
        <Skills></Skills>
      </div>
    );
  }
}
export default About;
