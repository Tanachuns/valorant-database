import React from "react";

const WeaponList = (props) => {
  return (
    <div
      className="weapon-list box"
      style={{ gridRow: props.row, gridColumn: props.col }}
    >
      <p>{props.weaponType}</p>
      {props.weaponList}
    </div>
  );
};

export default WeaponList;
