import axios from "axios";
import React from "react";
import Loading from "../Loading/Loading";
import WeaponList from "./WeaponList";
import "./Weapons.css";

const Weapons = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [weaponList, setWeaponList] = React.useState();
  React.useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/weapons")
      .then((response) => {
        setWeaponList(response.data.data);
      })
      .then(() => {
        setTimeout(() => {
          setIsLoading(false);
        }, 2500);
      })
      .catch((error) => {
        console.log(error);
      });
  }, []);

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="container weapon">
        <WeaponList weaponList={weaponList} />
      </div>
    );
  }
};
export default Weapons;
