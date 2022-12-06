import "./App.css";
import { Route, Routes, Link, Navigate } from "react-router-dom";
import "./App.css";

import Home from "./components/Home/Home";
import GameModes from "./components/GameModes/GameModes";
import Agents from "./components/Agents/Agents";
import Weapons from "./components/Weapons/Weapons";
import Maps from "./components/Maps/Maps";
import PageNotFound from "./components/PageNotFound/PageNotFound";
import React from "react";

function App() {
  const [page, setPage] = React.useState(0);
  let nav = "";
  switch (page) {
    case 0:
      nav = "Home";
      break;
    case 1:
      nav = "Game Modes";
      break;
    case 2:
      nav = "Agents";
      break;
    case 3:
      nav = "Weapons";
      break;
    case 4:
      nav = "Maps";
      break;
    default:
      nav = "Home";
      break;
  }

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
        <p> /{nav}</p>
      </header>
      <main>
        <Routes>
          <Route path="/" element={<Navigate to="/home" />} />
          <Route path="/home" element={<Home setPage={setPage} />} />
          <Route path="/gamemodes" element={<GameModes setPage={setPage} />} />
          <Route path="/agent" element={<Agents setPage={setPage} />} />
          <Route path="/weapons" element={<Weapons setPage={setPage} />} />
          <Route path="/maps" element={<Maps setPage={setPage} />} />
          <Route path="*" element={<PageNotFound />} />
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
