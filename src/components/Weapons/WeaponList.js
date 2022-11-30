import React from "react";
import WeaponBox from "./WeaponBox";

const WeaponList = (props) => {
  props.weaponList.pop();
  const sideArm = props.weaponList
    .filter((item) => {
      console.log(item.shopData.categoryText);
      return item.shopData.categoryText === "Sidearms";
    })
    .map((item) => {
      return <WeaponBox img={item.displayIcon} />;
    });

  return <div className="weapon-sidearm box">{sideArm}</div>;
};

export default WeaponList;
