import React from "react";
import AgentAbility from "./AgentAbility";
const AgentDetail = (props) => {
  if (props.agent.abilities !== undefined) {
    const abilities = props.agent.abilities.map((item, index) => {
      return <AgentAbility key={index} item={item} />;
    });
    return (
      <div className="agents-show">
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
        <img src={props.agent.fullPortrait} alt={props.agent.displayName} />
      </div>
    );
  }
};

export default AgentDetail;
