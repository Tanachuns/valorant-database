import React from "react";
import "./Home.css";
import Menu from "./Menu";

const Home = (props) => {
  return (
    <div className="home">
      <div className="home-img">
        <h1>Home</h1>
      </div>
      <Menu />
    </div>
  );
};

export default Home;
