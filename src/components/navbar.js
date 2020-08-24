import React from "react";
import { Link } from "react-scroll";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars } from "@fortawesome/free-solid-svg-icons";

export default function Navbar({ fixed }) {
  const [navbarOpen, setNavbarOpen] = React.useState(false);
  return (
    <nav className="navbar">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between  text-white relative flex flex-wrap items-center justify-between px-2 py-3 navbar-expand-lg mb-3">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            activeClass="active"
            to="home"
            spy={true}
            smooth={true}
            duration={1000}
          >
            <h5 className="cursor-pointer p-2">
              <strong>Annie Bartlett</strong>
            </h5>
          </Link>

          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none hover:text-orange-400"
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
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <li className="nav-item">
              <Link
                className="inline px-2 py-1 cursor-pointer hover:text-orange-400"
                activeClass="active"
                to="about"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <strong>About</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="inline px-2 py-1 cursor-pointer hover:text-orange-400"
                activeClass="active"
                to="portfolio"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <strong>Portfolio</strong>
              </Link>
            </li>
            <li className="nav-item">
              <Link
                className="inline px-2 py-1 cursor-pointer hover:text-orange-400"
                activeClass="active"
                to="contact"
                spy={true}
                smooth={true}
                duration={1000}
              >
                <strong>Contact</strong>
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}
