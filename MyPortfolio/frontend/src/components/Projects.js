import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCode,
  faFilm,
  faUser,
  faFolderOpen,
} from "@fortawesome/free-solid-svg-icons"; // Additional icons
import "../style.css";

const Projects = () => {
  return (
    <section id="projects" className="container text-center">
      <h2 className="section-title">
        <FontAwesomeIcon icon={faCode} className="mr-2" />
        Projects
      </h2>

      <div className="project-container">
        {/* Project 1 */}
        <div className="card-wrapper">
          <div className="card mb-4">
            <div className="card-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQmnYWtsmHls513QIANGxxu4sfHRV7fQz8reg&s"
                alt="EmployeePerks Project"
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
                EmployeePerks Management using SpringBoot
              </h5>
              <p className="card-text">
                Created Employee Perks Order Management Rest Application using
                Spring Boot that allows employees to place orders for supported
                products.
              </p>
            </div>
          </div>
        </div>

        {/* Project 2 */}
        <div className="card-wrapper">
          <div className="card mb-4">
            <div className="card-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSlJy8L1N5Zvuz5JRWBLHi7zsbi0M3wc3FFjA&s"
                alt="MovieSearch Project"
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faFilm} className="mr-2" />
                MovieSearch Engine using ReactJS
              </h5>
              <p className="card-text">
                A movie search engine where users can search for movies and view
                results in a card format.
              </p>
            </div>
          </div>
        </div>

        {/* Project 3 */}
        <div className="card-wrapper">
          <div className="card mb-4">
            <div className="card-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTc412Jini2wmqLqIg4Srjd1jLyCEx8keIrsw&s"
                alt="RegistrationForm Project"
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faUser} className="mr-2" />
                Registration Form using ReactJS
              </h5>
              <p className="card-text">
                Developed a registration form to capture and display user
                information using ReactJs and Bootstrap.
              </p>
            </div>
          </div>
        </div>

        {/* Project 4 */}
        <div className="card-wrapper">
          <div className="card mb-4">
            <div className="card-img">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQQ6l4ZplJ1L0DPGiU0mxkTRD7vz12jYBUj9A&s"
                alt="Portfolio Project"
                className="card-img-top"
              />
            </div>
            <div className="card-body">
              <h5 className="card-title">
                <FontAwesomeIcon icon={faFolderOpen} className="mr-2" />
                My Portfolio using ReactJS, Express.js, CSS, MySQL,Postman and
                Bootstrap
              </h5>
              <p className="card-text">
                Designed and developed my portfolio site with GitHub and
                LinkedIn links, featuring a contact form that saves data to
                MySQL and tested endpoints using Postman.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Projects;
