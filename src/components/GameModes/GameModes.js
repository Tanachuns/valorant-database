import React from "react";
import axios from "axios";
import Loading from "../Loading/Loading";
import "./GameModes.css";
/* eslint-disable react-hooks/exhaustive-deps */

const GameModes = (props) => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [gameModeList, setGameModeList] = React.useState([]);
  React.useEffect(() => {
    props.setPage(1);

    axios
      .get("https://valorant-api.com/v1/gamemodes")
      .then((response) => {
        setGameModeList(response.data.data);
      })
      .then(
        setTimeout(() => {
          setIsLoading(false);
        }, 2500)
      );
  }, []);

  const gameModes = gameModeList
    .filter((item) => {
      return item.displayIcon != null;
    })
    .map((item, index) => {
      return (
        <div key={index} className="box gamemode-item">
          <h2>{item.displayName}</h2>
          <img src={item.displayIcon} alt="" />
          <p>duration : {item.duration}</p>
        </div>
      );
    });

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="gamemode container">
        <div className="gamemode-list">{gameModes}</div>
      </div>
    );
  }
};

export default GameModes;
