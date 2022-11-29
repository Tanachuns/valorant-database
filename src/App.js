import "./App.css";
import axios from "axios";
import { Route, Routes, Link, Navigate } from "react-router-dom";

import Home from "./components/Home/Home";
import GameModes from "./components/GameModes/GameModes";
import Agents from "./components/Agents/Agents";
import Weapons from "./components/Weapons/Weapons";
import Maps from "./components/Maps/Maps";

function App() {
  return (
    <div className="App">
      <header>
        <h1>Valorant</h1>
      </header>
      <Routes>
        <Route path="/" element={<Navigate to="/home" />} />
        <Route path="/home" element={<Home />} />
        <Route path="/gamemodes" element={<GameModes />} />
        <Route path="/agent" element={<Agents />} />
        <Route path="/weapons" element={<Weapons />} />
        <Route path="/maps" element={<Maps />} />
      </Routes>
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
