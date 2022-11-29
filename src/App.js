import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import axios from "axios";
import "./App.css";

import Home from "./components/Home/Home";
import GameModes from "./components/GameModes/GameModes";
import Agents from "./components/Agents/Agents";
import Weapons from "./components/Weapons/Weapons";
import Maps from "./components/Maps/Maps";
import React from "react";

function App() {
  React.useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/agents")
      .then((res) => {
        console.log(res);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);
  return (
    <div className="App">
      <header>
        <Link to="/home">
          <h1>Valorant</h1>
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
        <Link to="/home">Home</Link>
        <Link to="/gamemodes">GameModes</Link>
        <Link to="/agent">Agents</Link>
        <Link to="/weapons">Weapons</Link>
        <Link to="/maps">Maps</Link>
      </footer>
    </div>
  );
}

export default App;
