import React from "react";
import "./Home.css";

const Home = () => {
  return (
    <div className="container-fluid main-section overflow-hidden">
      <div className="container">
        <div className="row">
          <div className="col-md-6 col-12">
            <div className="banner-left">
              <h1>Hi There, I'm</h1>
              <h2>Valli</h2>
              <span className="head-bottom"></span>
              <h3 className="typing">Software Developer</h3>
              <p>
                Interested in Developing and maintaining software applications
                using modern programming languages and frameworks.
              </p>
            </div>
          </div>
          <div className="col-md-6 col-12">
            <div className="banner-top">
              <div className="banner-img">
                <img
                  src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQLeEJ47c_Y9g5VeNDcUWmFMuvpjB4LsrR3ZQ&s"
                  alt="image"
                  title="Flowers"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
