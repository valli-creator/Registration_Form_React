import React from "react";
import { Link, Outlet } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import {
  faInfoCircle,
  faCode,
  faEnvelope,
  faCogs,
  faHome,
} from "@fortawesome/free-solid-svg-icons";

const Navbar = () => {
  return (
    <>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="/">
              Home <FontAwesomeIcon icon={faHome} className="mr-2" />
            </Link>
          </li>
          <li>
            <Link to="/about">
              About{" "}
              <FontAwesomeIcon
                icon={faInfoCircle}
                className="ml-2 text-light ho ho"
              />{" "}
            </Link>
          </li>
          <li>
            <Link to="/skills">
              Skills <FontAwesomeIcon icon={faCogs} className="mr-2" />
            </Link>
          </li>
          <li>
            <Link to="/projects">
              Projects{" "}
              <FontAwesomeIcon icon={faCode} className="ml-2 text-light ho" />{" "}
            </Link>
          </li>
          <li>
            <Link to="/contact">
              Contact{" "}
              <FontAwesomeIcon
                icon={faEnvelope}
                className="ml-2 text-light ho"
              />{" "}
            </Link>
          </li>
        </ul>
      </nav>
      <nav className="navbar">
        <ul>
          <li>
            <Link to="https://github.com/valli-creator">
              <span>Github</span>
              <FontAwesomeIcon
                icon={faGithub}
                size="lg"
                className="text-light ho"
              />
            </Link>
          </li>
          <li>
            <Link to="https://www.linkedin.com/in/valliammai-ramanathan-46477645/">
              <span>Linkedin</span>
              <FontAwesomeIcon
                icon={faLinkedin}
                size="lg"
                className="text-light ho"
              />
            </Link>
          </li>
        </ul>
      </nav>

      <Outlet />
    </>
  );
};
export default Navbar;
