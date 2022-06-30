import React from "react";
import "./Home.css";
import Data from "../../master.json";
const Home = () => {
  return (
    <section className="wrapper" id="home">
      <div className="home-content">
        <div className="home-heading">
        <h2>Hi, I am</h2>
          <h1>{Data["firstname"]}</h1>
          <h2 className="home__text sweet pz__10">I'm a Front End Developer,</h2>
          
        </div>
      </div>
     
    </section>
  );
};

export default Home;
