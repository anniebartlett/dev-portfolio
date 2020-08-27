import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithubSquare } from "@fortawesome/free-brands-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";

class Footer extends Component {
  render() {
    return (
      <div className="contact min-w-full px-6 mx-auto pt-32 pb-32">
        <div className="container mx-auto text-white">
          <h4>want to stay in touch?</h4>
          <a href="mailto:hello@anniebartlett.dev?subject=Hello!">
            <h5 className="hover:text-red-400">hello@anniebartlett.dev</h5>
          </a>
          <p>or find me here:</p>
          <div className="links">
            <div className="inline text-2xl px-1 py-1 m-1">
              <a
                href="https://github.com/anniebartlett"
                target="blank"
                className="no-underline hover:text-red-400"
              >
                <FontAwesomeIcon icon={faGithubSquare} />
              </a>
            </div>
            <div className="inline text-2xl px-1 py-1 m-1">
              <a
                href="https://linkedin.com/in/anniebartlett"
                target="blank"
                className="no-underline hover:text-red-400"
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
