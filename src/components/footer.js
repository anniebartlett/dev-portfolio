import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="contact min-w-full bg-black">
        <div className="container mx-auto px-4 pt-6 h-64 text-white">
          <h4>want to stay in touch?</h4>
          <a href="mailto:anniebartltt@gmail.com">
            <h5>drop me an email</h5>
          </a>
          <p>or find me here:</p>
          <div className="links">
            <div className="inline text-2xl px-1 py-1 m-1">
              <a
                href="https://github.com/anniebartlett"
                target="blank"
                className="no-underline"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </div>
            <div className="inline text-2xl px-1 py-1 m-1">
              <a
                href="https://linkedin.com/in/anniebartlett"
                target="blank"
                className="no-underline"
              >
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
        </div>
      </div>
    );
  }
}
export default Footer;
