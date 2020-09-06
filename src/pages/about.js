import React, { Component } from "react";
import { IntersectionObserver } from "../components/intersection-observer";
import { ScaleBox } from "../components/scale-box";
import Skills from "../pages/skills";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faDownload } from "@fortawesome/free-solid-svg-icons";

class About extends Component {
  render() {
    return (
      <IntersectionObserver>
        <ScaleBox>
          <div className="about container px-4 mx-auto pt-20">
            <h3>About Me</h3>
            <div className="lg:flex">
              <div className="about-me mr-12">
                <p className="leading-relaxed mb-6">
                  Hey, I'm Annie. I'm a full-stack web developer based in
                  London.
                </p>
                <p className="leading-relaxed mb-6">
                  After 7 years working in Fashion Merchandising at Asos, I
                  decided to retrain and embark a new journey as a web
                  developer.
                </p>
                <p className="leading-relaxed mb-6">
                  Life took another turn and in Feb 2020 I gave birth to my
                  little son Henry.
                </p>
                <p className="leading-relaxed mb-6">
                  I've always loved tech and design, so in April 2020 I made one
                  of the best decisions to take part in the Le Wagon part-time
                  bootcamp whilst on maternity leave.
                </p>
                <p className="leading-relaxed mb-6">
                  I learned the fundamentals of code through Ruby, as well as
                  HTML5, CSS3 and JS, React and Node (Bootstrap and milk bottles
                  became the norm!)
                </p>
                <p className="leading-relaxed mb-6">
                  I love making beautiful digital products, combining technology
                  with creative ideas.
                </p>
                <a
                  href={require("../assets/files/Annie-Bartlett-CV.pdf")}
                  download="Annie-Bartlett-CV"
                  className="no-underline hover:text-red-400"
                >
                  <p className="hover:text-red-400">
                    <FontAwesomeIcon icon={faDownload} /> Download my resumé
                  </p>
                </a>
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
        </ScaleBox>
      </IntersectionObserver>
    );
  }
}
export default About;
