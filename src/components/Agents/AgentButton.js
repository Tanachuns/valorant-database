import React from "react";

const AgentButton = (props) => {
  return (
    <img
      onClick={() => {
        props.setAgent(props.agent);
      }}
      src={props.agent.displayIcon}
      alt={props.agent.displayName}
      width={50}
    />
  );
};

export default AgentButton;
