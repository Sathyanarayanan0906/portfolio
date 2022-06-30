import React from "react";
import "./About.css";
function AboutMe() {
  
  return (
    
    <div className="about component__about" id="about">
      <div className="container">
        <div className="row">
          
          <div className="col__2">
          <h1 className="home__text pz__10">Hi, </h1>
          <h1 className="home__text pz__10">nice to meet you.</h1>
          </div>
          
          <div className="col__2">
            <h1 className="about__heading">About Me</h1>
            <div className="about__meta">
              <p className="about__text p__color" > 
              I have just completed a 6 month-long coding class at Soflogic Institute Chennai,and which ended with lot of tasks and some 
              projects on web developments and ReactJS application.I am very passionate in web development so i will do the beyond best 
               of your satisfactory.I have been practicing coding for 6 months, and, although I am still a junior,
              still a beginner, my motivation is at a 100%!
              </p>
              <p className="about__text p__color" >
              Are you looking for a fresh junior web developer? Highly motivated and fast learner? I'm here for you! You can download my Resume by
          clicking on the button below.
              </p> 
              <div className="about__button d__flex align__items__center">
                <a href="#">
                  <button className="about btn pointer">Download Resume</button>
                </a>
              </div>
            </div>
          </div>
        
        </div>
      </div>
    </div>
  );
}

export default AboutMe;
