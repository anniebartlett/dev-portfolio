import React, { Component } from "react";
import { Link } from "react-scroll";

class Navbar extends Component {
  render() {
    return (
      <nav className="navbar">
        <div className="container px-4 py-4 mx-auto flex flex-wrap items-center justify-between m-6 w-full">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <p className="cursor-pointer">ANNIE BARTLETT</p>
          </Link>

          <div className="flex-row">
            <Link
              className="nav-item inline px-2 py-1 cursor-pointer"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              ABOUT
            </Link>

            <Link
              className="nav-item inline px-2 py-1 cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              CONTACT
            </Link>
          </div>
        </div>
      </nav>
    );
  }
}
export default Navbar;

// <Link
//   className="nav-item inline px-2 py-1 cursor-pointer"
//   activeClass="active"
//   to="portfolio"
//   spy={true}
//   smooth={true}
//   duration={1000}
// >
//   PORTFOLIO
// </Link>

// <a
//   href={require("../assets/files/Annie-Bartlett-CV.pdf")}
//   target="blank"
//   className="nav-item inline px-2 py-1 cursor-pointer"
// >
//   RESUMÉ
// </a>
