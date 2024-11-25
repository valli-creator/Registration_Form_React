import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUser } from "@fortawesome/free-solid-svg-icons";

const About = () => {
  return (
    <section id="about" className="about-section container text-center py-5">
      <div className="row">
        <div className="col-lg-6 mx-auto">
          <h2 className="section-title mb-4">
            <FontAwesomeIcon icon={faUser} className="mr-2" />
            About Me
          </h2>
          <div className="profile-image-container mb-4">
            <img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcT0rDiT9it7r-r__abYbK7u5UQ1av9CoxaChw&s"
              alt="user pic"
              className="img-fluid rounded-circle profile-image"
            />
          </div>
          <div className="about-list">
            <p className="mb-2">
              Being a self-motivated and enthusiastic learner would like to be a
              part of a firm where I can enhance my detail-oriented
              problem-solving skills and also be exposed to challenges which
              will help chisel success for myself and the firm.
            </p>
            <p className="mb-2">
              {" "}
              Highly motivated Fresher Software Developer with a strong
              foundation in Java, C and Javascript. Proven ability to
              collaborate with cross-functional teams to deliver user-friendly
              mobile applications, improve system reliability, and increase
              customer satisfaction.{" "}
            </p>
            <p className="mb-2">
              {" "}
              Skilled in agile methodologies, RESTful APIs, SQL, and automated
              testing using Selenium.
            </p>
            <p className="mb-2">
              {" "}
              Develop and maintain software applications using modern
              programming languages and frameworks.{" "}
            </p>
            <p className="mb-2">
              Analyze user requirements to contribute to software design and
              functionality improvements.{" "}
            </p>
            <p className="mb-2">
              Assist in debugging and troubleshooting software issues to enhance
              application performance.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
