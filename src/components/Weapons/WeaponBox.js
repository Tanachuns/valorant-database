import React from "react";

const WeaponBox = (props) => {
  return (
    <div className="weapon-box tooltip">
      <img width={110} src={props.item.displayIcon} alt="" />
      <div class="top">
        <h3>{props.item.displayName}</h3>
        <p>{props.item.shopData.cost}$</p>
        <p>Type: {props.item.shopData.categoryText}</p>
        <i></i>
      </div>
    </div>
  );
};

export default WeaponBox;
