import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import GameModes from "./components/GameModes/GameModes";
import Agents from "./components/Agents/Agents";
import Weapons from "./components/Weapons/Weapons";
import Maps from "./components/Maps/Maps";
import React from "react";

function App() {
  return (
    <div className="App">
      <header>
        <Link to="/home">
          <h1>
            <img
              src="https://1000logos.net/wp-content/uploads/2022/09/Valorant-Emblem.png" //need local logo
              alt="Home"
              width={50}
            />
            Valorant
          </h1>
        </Link>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home />} />
          <Route path="/gamemodes" element={<GameModes />} />
          <Route path="/agent" element={<Agents />} />
          <Route path="/weapons" element={<Weapons />} />
          <Route path="/maps" element={<Maps />} />
        </Routes>
      </main>
      <footer>
        <div>
          <Link to="/home">Home</Link>
          <Link to="/gamemodes">GameModes</Link>
          <Link to="/agent">Agents</Link>
          <Link to="/weapons">Weapons</Link>
          <Link to="/maps">Maps</Link>
        </div>
      </footer>
    </div>
  );
}

export default App;
