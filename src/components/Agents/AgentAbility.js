import React from "react";

const AgentAbility = (props) => {
  return (
    <div>
      <img
        src={props.item.displayIcon}
        alt={props.item.displayName}
        width={20}
      />
      <p>
        {props.item.displayName} : {props.item.description}
      </p>
    </div>
  );
};

export default AgentAbility;
