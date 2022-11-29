import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="home-menu">
      <Link id="gamemodes-btn" className="menu-box" to="/gamemodes">
        <div>GameModes</div>
      </Link>
      <Link className="menu-box" to="/agent">
        <div>Agents</div>
      </Link>
      <Link className="menu-box" to="/weapons">
        <div>Weapons</div>
      </Link>
      <Link id="maps-btn" className="menu-box" to="/maps">
        <div>Maps</div>
      </Link>
    </div>
  );
};

export default Menu;
