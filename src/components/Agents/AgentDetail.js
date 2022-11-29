import React from "react";
import AgentAbility from "./AgentAbility";
const AgentDetail = (props) => {
  console.log();
  if (props.agent.abilities !== undefined) {
    const abilities = props.agent.abilities.map((item) => {
      return <AgentAbility item={item} />;
    });
    return (
      <div className="agents-show">
        <img src={props.agent.fullPortrait} alt={props.agent.displayName} />
        <div className="agents-detail box">
          <h2>{props.agent.displayName}</h2>
          <img
            src={props.agent.displayIcon}
            alt={props.agent.displayName}
            height={100}
          />
          <p>{props.agent.description}</p>
          <h3>Abilities</h3>
          <div className="agents-detail-skill">{abilities}</div>
        </div>
      </div>
    );
  }
};

export default AgentDetail;
