import React from "react";
import { Link } from "react-router-dom";

const Menu = () => {
  return (
    <div className="home-menu box">
      <Link id="gamemodes-btn" className="menu-box" to="/gamemodes">
        GameModes
      </Link>
      <Link className="menu-box" to="/agent">
        Agents
      </Link>
      <Link className="menu-box" to="/weapons">
        Weapons
      </Link>
      <Link id="maps-btn" className="menu-box" to="/maps">
        Maps
      </Link>
    </div>
  );
};

export default Menu;
