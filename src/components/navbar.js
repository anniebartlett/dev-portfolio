import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";
import { motion } from "framer-motion";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between text-white relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <img
              src={require("../assets/images/programmer.png")}
              alt="home"
              className="navbar-icon cursor-pointer m-3"
            />
          </Link>

          <button
            className="nav-menu-button text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <FontAwesomeIcon icon={faBars} />
          </button>
        </div>

        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
        >
          <motion.div className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <Link
              className="nav-item inline px-2 py-1 cursor-pointer"
              activeClass="active"
              to="about"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <strong>About</strong>
            </Link>

            <Link
              className="nav-item inline px-2 py-1 cursor-pointer"
              activeClass="active"
              to="contact"
              spy={true}
              smooth={true}
              duration={1000}
            >
              <strong>Contact</strong>
            </Link>
          </motion.div>
        </div>
      </div>
    </nav>
  );
}

//<Link
//  className="nav-item inline px-2 py-1 cursor-pointer"
//  activeClass="active"
//   to="portfolio"
//   spy={true}
//   smooth={true}
//   duration={1000}
// >
//   <strong>Portfolio</strong>
// </Link>
