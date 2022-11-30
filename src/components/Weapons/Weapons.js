import axios from "axios";
import React from "react";
import Loading from "../Loading/Loading";
import WeaponList from "./WeaponList";
import WeaponBox from "./WeaponBox";

import "./Weapons.css";

const Weapons = () => {
  const [isLoading, setIsLoading] = React.useState(true);
  const [weaponList, setWeaponList] = React.useState([]);
  const [armorsList, setArmors] = React.useState([]);
  React.useEffect(() => {
    axios
      .get("https://valorant-api.com/v1/gear")
      .then((response) => {
        setArmors(response.data.data);
      })
      .catch((error) => {
        console.log(error);
      });
    axios
      .get("https://valorant-api.com/v1/weapons")
      .then((response) => {
        console.log(response);
        response.data.data.pop();
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
  const sideArm = weaponList
    .filter((item) => {
      return item.shopData.categoryText === "Sidearms";
    })
    .map((item, index) => {
      return <WeaponBox key={index} item={item} />;
    });
  const smgs = weaponList
    .filter((item) => {
      return item.shopData.categoryText === "SMGs";
    })
    .map((item, index) => {
      return <WeaponBox key={index} item={item} />;
    });
  const heavyWeapons = weaponList
    .filter((item) => {
      return item.shopData.categoryText === "Heavy Weapons";
    })
    .map((item, index) => {
      return <WeaponBox key={index} item={item} />;
    });

  const assaultRifles = weaponList
    .filter((item) => {
      return item.shopData.categoryText === "Assault Rifles";
    })
    .map((item, index) => {
      return <WeaponBox key={index} item={item} />;
    });

  const Shotguns = weaponList
    .filter((item) => {
      return item.shopData.categoryText === "Shotguns";
    })
    .map((item, index) => {
      return <WeaponBox key={index} item={item} />;
    });

  const snipers = weaponList
    .filter((item) => {
      return item.shopData.categoryText === "Sniper Rifles";
    })
    .map((item, index) => {
      return <WeaponBox key={index} item={item} />;
    });
  const armors = armorsList.map((item, index) => {
    return <WeaponBox key={index} item={item} />;
  });

  if (isLoading) {
    return <Loading />;
  } else {
    return (
      <div className="container weapon">
        <WeaponList
          row="1 / span 2"
          col="1"
          weaponList={sideArm}
          weaponType={"SideArms"}
        />
        <WeaponList
          row="1 / span 1"
          col="2"
          weaponList={smgs}
          weaponType={"SMGs"}
        />
        <WeaponList
          row="1 / span 1"
          col="3"
          weaponList={heavyWeapons}
          weaponType={"Heavy Weapons"}
        />
        <WeaponList
          row="1 / span 2"
          col="4"
          weaponList={assaultRifles}
          weaponType={"Assault Rifles"}
        />
        <WeaponList
          row="2 / span 1"
          col="2"
          weaponList={Shotguns}
          weaponType={"Shotguns"}
        />
        <WeaponList
          row="2 / span 1"
          col="3"
          weaponList={snipers}
          weaponType={"Sniper Rifles"}
        />
        <WeaponList
          row="1 / span 2"
          col="5"
          weaponList={armors}
          weaponType={"Armors"}
        />
      </div>
    );
  }
};
export default Weapons;
